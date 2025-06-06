import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  // Format: Month Day, Year (e.g., May 14, 2023)
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

export function getReferralUrl(url: string): string {
  try {
    const urlObj = new URL(url);
    urlObj.searchParams.set('ref', 'skypealternativelist.com');
    return urlObj.toString();
  } catch {
    // If URL is invalid, return original
    return url;
  }
}
