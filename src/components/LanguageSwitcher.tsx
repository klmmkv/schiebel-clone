'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // Remove current locale prefix and add new one
    const pathWithoutLocale = pathname.replace(/^\/(en|ru)/, '');
    router.push(`/${newLocale}${pathWithoutLocale || '/'}`);
  };

  return (
    <div className="flex items-center gap-1">
      <Globe className="h-4 w-4 text-muted-foreground mr-1" />
      <Button
        variant={locale === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => switchLocale('en')}
        className="px-2 py-1 h-8 text-xs font-medium"
      >
        EN
      </Button>
      <Button
        variant={locale === 'ru' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => switchLocale('ru')}
        className="px-2 py-1 h-8 text-xs font-medium"
      >
        RU
      </Button>
    </div>
  );
}
