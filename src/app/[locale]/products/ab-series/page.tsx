import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Zap, Cog, Shield, Settings, ArrowLeft } from 'lucide-react';

export default function ABSeriesPage() {
  const t = useTranslations('products.ab');
  const common = useTranslations('common');
  const locale = useLocale();

  const features = [
    { key: 'performance', icon: Zap },
    { key: 'robustness', icon: Cog },
    { key: 'safety', icon: Shield },
    { key: 'flexibility', icon: Settings },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a365d] to-[#2d4a7c] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/products/ab-hero.jpg"
            alt="AB Series actuator"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Link href={`/${locale}`} className="inline-flex items-center text-gray-300 hover:text-white mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {common('backToProducts')}
          </Link>
          <Badge className="mb-4 bg-blue-500 hover:bg-blue-600">{t('badge')}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('name')}</h1>
          <p className="text-2xl text-[#f97316] font-medium mb-4">{t('tagline')}</p>
          <p className="text-xl text-gray-300 max-w-3xl">{t('description')}</p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-8 bg-blue-500 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-2xl font-bold">SIL-2</div>
              <div className="text-blue-100">{t('standardSafety')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold">SIL-3</div>
              <div className="text-blue-100">{t('withFailsafe')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold">ATEX IIC</div>
              <div className="text-blue-100">{t('hydrogenReady')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <Card key={feature.key} className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-[#1a365d]">
                    {t(`${feature.key}.title`)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{t(`${feature.key}.content`)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a365d] mb-8">
            {t('applicationsTitle')}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['appPowerPlants', 'appSteel', 'appOilGas', 'appChemical', 'appWater'].map((appKey) => (
              <Badge key={appKey} variant="secondary" className="px-4 py-2 text-sm">
                {t(appKey)}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1a365d] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {t('ctaTitle')}
          </h2>
          <p className="text-gray-300 mb-8">
            {t('ctaSubtitle')}
          </p>
          <Button asChild size="lg" className="bg-[#f97316] hover:bg-[#ea580c]">
            <a href="mailto:info@schiebel-actuators.com">
              {common('contactUs')}
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
