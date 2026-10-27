import { describe, expect, it } from 'vitest';
import { appLocale } from '../app-locale';

describe('appLocale', () => {
  it('takes the language picked in settings', () => {
    expect(appLocale('de', 'en-US')).toBe('de');
  });

  it('follows the system only when the system option is picked', () => {
    expect(appLocale('system', 'fr-CA')).toBe('fr');
    expect(appLocale('system', 'zh-CN')).toBe('zh-CN');
    expect(appLocale('system', 'pt-PT')).toBe('pt-BR');
  });

  it('falls back to Turkish when nothing, an unknown language or an unshipped system language is picked', () => {
    expect(appLocale(null, 'fr-CA')).toBe('tr');
    expect(appLocale(undefined, 'en-US')).toBe('tr');
    expect(appLocale('ja', 'en-US')).toBe('tr');
    expect(appLocale('system', 'ja-JP')).toBe('tr');
  });
});
