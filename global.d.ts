import type messages from './src/i18n/locales/en.json';

declare module 'next-intl' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface AppConfig {
    Messages: typeof messages;
  }
}
