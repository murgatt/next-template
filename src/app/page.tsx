import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <main className="gap min-h-screen p-24 text-center">
      <h1 className="text-2xl font-semibold">{t('title')}</h1>
    </main>
  );
}
