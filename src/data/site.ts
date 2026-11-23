export interface SiteConfig {
  name: string;
  bioLines: string[];
  email: string;
  instagramHandle: string;
  instagramUrl: string;
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
  secondaryLinkLabel: 'ARCHIVE',
  secondaryLinkUrl: 'https://lovdlx-folio.framer.website/',
  visualDiaryLabel: 'VISUAL DIARY',
};
