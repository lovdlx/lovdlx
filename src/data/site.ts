export interface ContactLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface SiteConfig {
  name: string;
  bioLines: string[];
  contacts: ContactLink[];
  visualDiaryLabel: string;
}

export const SITE: SiteConfig = {
  name: 'SEMYON SHVETSOV',
  bioLines: ['Brand & Visual Designer.', 'Art Direction & Packaging.'],
  contacts: [
    {
      label: 'cvteau17@gmail.com',
      href: 'mailto:cvteau17@gmail.com',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/semyon-shvetsov/',
      external: true,
    },
    {
      label: 'Telegram',
      href: 'https://t.me/hss_hss_as',
      external: true,
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/lovdeluxe_/',
      external: true,
    },
    {
      label: 'SoundCloud',
      href: 'https://soundcloud.com/lovdlx',
      external: true,
    },
  ],
  visualDiaryLabel: 'VISUAL DIARY',
};
