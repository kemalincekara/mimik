const APP_LOCALES = ['tr', 'en', 'de', 'es', 'fr', 'pt-BR', 'zh-CN', 'ru'] as const;

export type AppLocale = (typeof APP_LOCALES)[number];

export const DEFAULT_APP_LOCALE: AppLocale = 'tr';

export function appLocale(chosen: string | null | undefined, system: string): AppLocale {
  const known = (code: string | null | undefined) => APP_LOCALES.find((locale) => locale === code);
  if (chosen !== 'system') return known(chosen) ?? DEFAULT_APP_LOCALE;
  const base = system.split('-')[0]?.toLowerCase();
  return (
    known(system) ?? APP_LOCALES.find((locale) => locale.split('-')[0]!.toLowerCase() === base) ?? DEFAULT_APP_LOCALE
  );
}
