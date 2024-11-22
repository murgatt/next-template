import type en from './src/i18n/locales/en.json';

type Messages = typeof en;

declare global {
  type IntlMessages = Messages;
}
