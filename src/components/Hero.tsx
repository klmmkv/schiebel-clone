'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  backgroundImage?: string;
  showVideo?: boolean;
}

export function Hero({
  title,
  subtitle,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  backgroundImage,
  showVideo = false,
}: HeroProps) {
  const t = useTranslations('hero');
  const locale = useLocale();

  const displayTitle = title || t('title');
  const displaySubtitle = subtitle || t('subtitle');
  const displayCtaText = ctaText || t('cta');
  const displayCtaHref = ctaHref || `/${locale}/products`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />

      {/* Content */}
      <div className="container relative mx-auto px-4 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary-foreground border border-primary/20 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {t('badge')}
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {displayTitle}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl">
            {displaySubtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="group">
              <Link href={displayCtaHref}>
                {displayCtaText}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            {secondaryCtaText && secondaryCtaHref && (
              <Button asChild variant="outline" size="lg" className="bg-transparent border-slate-600 hover:bg-slate-800">
                <Link href={secondaryCtaHref}>
                  {showVideo && <Play className="mr-2 h-4 w-4" />}
                  {secondaryCtaText}
                </Link>
              </Button>
            )}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-slate-700/50">
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-primary">{t('stats.countries')}</p>
              <p className="text-sm text-slate-400 mt-1">{t('stats.countriesLabel')}</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-primary">{t('stats.employees')}</p>
              <p className="text-sm text-slate-400 mt-1">{t('stats.employeesLabel')}</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-primary">{t('stats.partners')}</p>
              <p className="text-sm text-slate-400 mt-1">{t('stats.partnersLabel')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-primary/5 to-transparent pointer-events-none" />
    </section>
  );
}
