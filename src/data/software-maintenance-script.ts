#!/usr/bin/env node

import readline from 'readline';
import {Software, softwareData as originalData} from './software.ts';

// Create readline interface for interactive CLI
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Helper function to ask questions
const question = (query) => new Promise((resolve) => rl.question(query, resolve));

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  gray: '\x1b[90m'
};

// Define the order for first items (you can customize this)
const PRIORITY_ORDER = [
  'Discord',
  'Zoom',
  'Microsoft Teams',
  'Telegram',
  'Viber',
  'WhatsApp',
  'Signal',
  'GlobalDial',
  'Callshake'
];

// Main categories for prioritization
const MAIN_CATEGORIES = [
  'International Calling',
  'Personal Communication',
  'Landline Calling'
];

class SoftwareDataMaintainer {
  data: Software[];
  changes: [];

  constructor(data) {
    this.data = [...data]; // Create a copy to work with
    this.changes = [];
  }

  // 1. Find and handle duplicates
  async handleDuplicates() {
    console.log(`\n${colors.cyan}=== Checking for duplicates ===${colors.reset}`);
    
    const titleGroups = {};
    this.data.forEach((item, index) => {
      const title = item.title.toLowerCase();
      if (!titleGroups[title]) {
        titleGroups[title] = [];
      }
      titleGroups[title].push({ ...item, originalIndex: index });
    });

    const duplicates = Object.entries(titleGroups).filter(([_, items]) => items.length > 1);
    
    if (duplicates.length === 0) {
      console.log(`${colors.green}✓ No duplicates found${colors.reset}`);
      return;
    }

    console.log(`${colors.yellow}Found ${duplicates.length} duplicate groups:${colors.reset}`);
    
    for (const [title, items] of duplicates) {
      console.log(`\n${colors.yellow}Duplicates for "${items[0].title}":${colors.reset}`);
      
      items.forEach((item, index) => {
        console.log(`\n  ${colors.blue}[${index + 1}]${colors.reset} ${item.title}`);
        console.log(`      URL: ${item.url}`);
        console.log(`      Category: ${item.Category}`);
        console.log(`      Description: ${item.text?.substring(0, 80)}...`);
      });

      const answer = await question(`\nWhich one to keep? (1-${items.length}, or 'skip' to keep all): `);
      
      if (answer.toLowerCase() !== 'skip') {
        const keepIndex = parseInt(answer) - 1;
        if (keepIndex >= 0 && keepIndex < items.length) {
          const keepItem = items[keepIndex];
          const removeIndices = items
            .filter((_, i) => i !== keepIndex)
            .map(item => item.originalIndex)
            .sort((a, b) => b - a); // Sort descending to remove from end
          
          for (const index of removeIndices) {
            this.data.splice(index, 1);
            this.changes.push(`Removed duplicate: ${items[0].title} at index ${index}`);
          }
          
          console.log(`${colors.green}✓ Kept option ${keepIndex + 1}${colors.reset}`);
        }
      }
    }
  }

  // 2. Fix separators
  fixSeparators() {
    console.log(`\n${colors.cyan}=== Fixing separators ===${colors.reset}`);
    let fixedCount = 0;

    this.data.forEach((item, index) => {
      // Fix category separators
      if (item.Category && item.Category.includes('|')) {
        const before = item.Category;
        item.Category = item.Category.split('|').map(c => c.trim()).join(', ');
        if (before !== item.Category) {
          fixedCount++;
          this.changes.push(`Fixed category separators for: ${item.title}`);
        }
      }

      // Fix pros separators
      if (item.pros && item.pros.includes(',') && !item.pros.includes('|')) {
        const before = item.pros;
        item.pros = item.pros.split(',').map(p => p.trim()).join('|');
        if (before !== item.pros) {
          fixedCount++;
          this.changes.push(`Fixed pros separators for: ${item.title}`);
        }
      }

      // Fix cons separators
      if (item.cons && item.cons.includes(',') && !item.cons.includes('|')) {
        const before = item.cons;
        item.cons = item.cons.split(',').map(c => c.trim()).join('|');
        if (before !== item.cons) {
          fixedCount++;
          this.changes.push(`Fixed cons separators for: ${item.title}`);
        }
      }
    });

    console.log(`${colors.green}✓ Fixed ${fixedCount} separator issues${colors.reset}`);
  }

  // 3. Enforce order
  enforceOrder() {
    console.log(`\n${colors.cyan}=== Enforcing order ===${colors.reset}`);
    
    const newData = [];
    const used = new Set();

    // First, add items in priority order
    for (const title of PRIORITY_ORDER) {
      const item = this.data.find(i => i.title === title && !used.has(i.title));
      if (item) {
        newData.push(item);
        used.add(item.title);
      }
    }

    // Then, add items from main categories
    for (const category of MAIN_CATEGORIES) {
      const categoryItems = this.data.filter(item => 
        !used.has(item.title) && 
        item.Category && 
        item.Category.includes(category)
      );
      
      categoryItems.forEach(item => {
        newData.push(item);
        used.add(item.title);
      });
    }

    // Finally, add remaining items
    this.data.forEach(item => {
      if (!used.has(item.title)) {
        newData.push(item);
      }
    });

    this.data = newData;
    this.changes.push('Reordered items according to priority');
    console.log(`${colors.green}✓ Order enforced${colors.reset}`);
  }

  // 4. Additional checks
  async additionalChecks() {
    console.log(`\n${colors.cyan}=== Running additional checks ===${colors.reset}`);
    
    const issues = [];

    this.data.forEach((item, index) => {
      // Check for missing required fields
      if (!item.title) issues.push(`Item at index ${index} missing title`);
      if (!item.url) issues.push(`"${item.title}" missing URL`);
      if (!item.slug) issues.push(`"${item.title}" missing slug`);
      if (!item.fullDescription) issues.push(`"${item.title}" missing fullDescription`);
      
      // Check for very short descriptions
      if (item.text && item.text.length < 20) {
        issues.push(`"${item.title}" has very short description (${item.text.length} chars)`);
      }
      
      // Check for missing thumbnails
      if (!item.thumbnail) {
        issues.push(`"${item.title}" missing thumbnail`);
      }
      
      // Check slug format (should be lowercase, hyphenated)
      if (item.slug && item.slug !== item.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')) {
        const expectedSlug = item.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
        if (item.slug !== expectedSlug) {
          issues.push(`"${item.title}" slug mismatch: "${item.slug}" vs expected "${expectedSlug}"`);
        }
      }
      
      // Check for broken URLs (basic validation)
      if (item.url && !item.url.startsWith('http')) {
        issues.push(`"${item.title}" URL doesn't start with http: ${item.url}`);
      }
    });

    if (issues.length > 0) {
      console.log(`${colors.yellow}Found ${issues.length} potential issues:${colors.reset}`);
      issues.forEach(issue => console.log(`  ${colors.gray}• ${issue}${colors.reset}`));
      
      const answer = await question('\nDo you want to see detailed stats? (y/n): ');
      if (answer.toLowerCase() === 'y') {
        this.showStats();
      }
    } else {
      console.log(`${colors.green}✓ No issues found${colors.reset}`);
    }
  }
  
  // Auto-fix common issues
  async autoFix() {
    console.log(`\n${colors.cyan}=== Auto-fix common issues ===${colors.reset}`);
    
    let fixed = 0;
    
    this.data.forEach(item => {
      // Auto-generate missing slugs
      if (!item.slug && item.title) {
        item.slug = item.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
        fixed++;
        this.changes.push(`Generated slug for ${item.title}: ${item.slug}`);
      }
      
      // Fix common URL issues
      if (item.url) {
        // Remove trailing slashes
        if (item.url.endsWith('/') && item.url !== 'https://') {
          item.url = item.url.slice(0, -1);
          fixed++;
        }
        
        // Ensure https
        if (item.url.startsWith('http://')) {
          item.url = item.url.replace('http://', 'https://');
          fixed++;
        }
      }
      
      // Trim whitespace from all string fields
      Object.keys(item).forEach(key => {
        if (typeof item[key] === 'string') {
          const trimmed = item[key].trim();
          if (trimmed !== item[key]) {
            item[key] = trimmed;
            fixed++;
          }
        }
      });
    });
    
    console.log(`${colors.green}✓ Auto-fixed ${fixed} issues${colors.reset}`);
  }

  // Show statistics
  showStats() {
    console.log(`\n${colors.cyan}=== Statistics ===${colors.reset}`);
    
    const stats = {
      total: this.data.length,
      categories: {},
      withPros: 0,
      withCons: 0,
      withScreenshots: 0,
      verified: 0,
      free: 0
    };

    this.data.forEach(item => {
      // Count categories
      if (item.Category) {
        item.Category.split(', ').forEach(cat => {
          stats.categories[cat] = (stats.categories[cat] || 0) + 1;
        });
      }
      
      if (item.pros) stats.withPros++;
      if (item.cons) stats.withCons++;
      if (item.screenshotUrl) stats.withScreenshots++;
      if (item.verified) stats.verified++;
      if (item.isFree) stats.free++;
    });

    console.log(`\nTotal items: ${stats.total}`);
    console.log(`With pros: ${stats.withPros} (${(stats.withPros/stats.total*100).toFixed(1)}%)`);
    console.log(`With cons: ${stats.withCons} (${(stats.withCons/stats.total*100).toFixed(1)}%)`);
    console.log(`With screenshots: ${stats.withScreenshots} (${(stats.withScreenshots/stats.total*100).toFixed(1)}%)`);
    console.log(`\nCategories:`);
    
    Object.entries(stats.categories)
      .sort(([,a], [,b]) => b - a)
      .forEach(([cat, count]) => {
        console.log(`  ${cat}: ${count}`);
      });
  }

  // Generate output
  generateOutput() {
    console.log(`\n${colors.cyan}=== Generating output ===${colors.reset}`);
    
    const output = `export interface Software {
  title: string;
  url: string;
  custom_redirect: string | null;
  slug: string;
  text: string;
  Category: string;
  Rank: number | null;
  Hide: boolean | null;
  isFree: boolean | null;
  verified: boolean | null;
  premium: boolean | null;
  images: string | null;
  thumbnail: string | null;
  screenshotUrl: string | null;
  fullDescription: string;
  pros?: string | null;
  cons?: string | null;
}

export const softwareData: Software[] = ${JSON.stringify(this.data, null, 2)};`;

    return output;
  }

  // Show summary of changes
  showSummary() {
    console.log(`\n${colors.cyan}=== Summary of changes ===${colors.reset}`);
    
    if (this.changes.length === 0) {
      console.log(`${colors.green}No changes made${colors.reset}`);
    } else {
      console.log(`${colors.yellow}Made ${this.changes.length} changes:${colors.reset}`);
      this.changes.forEach(change => {
        console.log(`  ${colors.gray}• ${change}${colors.reset}`);
      });
    }
  }
}

// Main function
async function main() {
  console.log(`${colors.blue}Software Data Maintenance Tool${colors.reset}`);
  console.log(`${colors.gray}Working with ${originalData.length} items${colors.reset}\n`);

  const maintainer = new SoftwareDataMaintainer(originalData);

  // Run all maintenance tasks
  await maintainer.handleDuplicates();
  maintainer.fixSeparators();
  maintainer.enforceOrder();
  await maintainer.autoFix();
  await maintainer.additionalChecks();

  // Show summary
  maintainer.showSummary();

  // Ask if user wants to save
  const answer = await question('\nDo you want to save the changes? (y/n): ');
  
  if (answer.toLowerCase() === 'y') {
    const output = maintainer.generateOutput();
    
    // Option 1: Log to console (you can pipe to file)
    console.log('\n--- OUTPUT ---');
    console.log(output);
    console.log('--- END OUTPUT ---');
    
    // Option 2: Instructions for saving
    console.log(`\n${colors.green}To save to file, run:${colors.reset}`);
    console.log(`node maintain-software.js > software.ts`);
    
    // Option 3: If you want to write directly (uncomment):
    // import { writeFileSync } from 'fs';
    // writeFileSync('./software.ts', output);
    // console.log(`${colors.green}✓ Saved to software.ts${colors.reset}`);
  }

  rl.close();
}

// Run the script
main().catch(console.error);
