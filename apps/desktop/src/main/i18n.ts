import { translate } from '@mimik/core/i18n/translate';
import { type AppLocale, appLocale, DEFAULT_APP_LOCALE } from './app-locale';
import { APP_MESSAGES } from './app-messages';

const active: { locale: AppLocale } = { locale: DEFAULT_APP_LOCALE };

export const mainI18n = {
  setLocale(code: string): void {
    active.locale = appLocale(code, code);
  },
  t(key: string, substitutions: string[] = []): string {
    const text = translate(APP_MESSAGES[active.locale], key, substitutions);
    return text === key ? translate(APP_MESSAGES.en, key, substitutions) : text;
  },
};
