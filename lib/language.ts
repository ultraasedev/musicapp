import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'fr'] as const;
export const defaultLocale = 'en' as const;

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ locales });

export function getLanguageName(locale: string): string {
  const languages = {
    en: 'English',
    fr: 'Français'
  };
  return languages[locale as keyof typeof languages] || locale;
}