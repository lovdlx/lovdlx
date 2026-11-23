export interface SiteConfig {
  name: string;
  bioLines: string[];
  email: string;
  instagramHandle: string;
  instagramUrl: string;
  telegramHandle?: string;
  telegramUrl?: string;
  secondaryLinkLabel?: string;
  secondaryLinkUrl?: string;
  visualDiaryLabel: string;
}

export const SITE: SiteConfig = {
  name: 'SEMYON SHVETSOV',
  bioLines: ['Brand & Visual Designer.', 'Art Direction & Packaging.'],
  email: 'cvteau17@gmail.com',
  instagramHandle: '@lovdeluxe_',
  instagramUrl: 'https://www.instagram.com/lovdeluxe_/',
  telegramHandle: 'Telegram',
  telegramUrl: 'https://t.me/hss_hss_as',
  secondaryLinkLabel: 'LINKTREE',
  secondaryLinkUrl: 'https://linktr.ee/semashvetsov',
  visualDiaryLabel: 'VISUAL DIARY',
};
