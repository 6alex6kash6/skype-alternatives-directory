export interface CategoryInfo {
  emoji: string;
  displayName: string;
  slug: string;
}

export const POPULAR_CATEGORIES = [
  'International Calling',
  'Internet Telephony',
  'Landline Calling',
  'Personal Communication',
  'Video Conferencing',
  'Team Collaboration',
] as const;

export const CATEGORY_MAPPING: Record<string, CategoryInfo> = {
  'International Calling': {
    emoji: '🌍',
    displayName: 'International Calling',
    slug: 'international-calling',
  },
  'Internet Telephony': {
    emoji: '📞',
    displayName: 'Internet Telephony',
    slug: 'internet-telephony',
  },
  'Landline Calling': {
    emoji: '🏠',
    displayName: 'Landline Calling',
    slug: 'landline-calling',
  },
  'Personal Communication': {
    emoji: '💬',
    displayName: 'Personal Communication',
    slug: 'personal-communication',
  },
  'Video Conferencing': {
    emoji: '📹',
    displayName: 'Video Conferencing',
    slug: 'video-conferencing',
  },
  'Team Collaboration': {
    emoji: '👥',
    displayName: 'Team Collaboration',
    slug: 'team-collaboration',
  },
  'Voice Chat for Gaming': {
    emoji: '🎮',
    displayName: 'Voice Chat for Gaming',
    slug: 'voice-chat-for-gaming',
  },
  'Secure Messaging': {
    emoji: '🔒',
    displayName: 'Secure Messaging',
    slug: 'secure-messaging',
  },
  'Self-Hosted Solutions': {
    emoji: '🏢',
    displayName: 'Self-Hosted Solutions',
    slug: 'self-hosted-solutions',
  },
  'Business Phone Systems': {
    emoji: '📱',
    displayName: 'Business Phone Systems',
    slug: 'business-phone-systems',
  },
};

export function getCategoryInfo(categoryName: string): CategoryInfo {
  const normalizedName = categoryName.trim();
  return CATEGORY_MAPPING[normalizedName] || {
    emoji: '',
    displayName: normalizedName,
    slug: normalizedName.toLowerCase().replace(/\s+/g, '-'),
  };
}

export function isPopularCategory(categoryName: string): boolean {
  return POPULAR_CATEGORIES.includes(categoryName as typeof POPULAR_CATEGORIES[number]);
}

export function getCategorySlug(categoryName: string): string {
  return getCategoryInfo(categoryName).slug;
}

export function getCategoryDisplayName(categoryName: string): string {
  return getCategoryInfo(categoryName).displayName;
}

export function getCategoryEmoji(categoryName: string): string {
  return getCategoryInfo(categoryName).emoji;
} 