import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <main className="gap flex min-h-screen flex-col justify-center text-center">
      <h1 className="text-2xl font-semibold">{t('title')}</h1>
    </main>
  );
}
