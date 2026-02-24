import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, History, AlertCircle, Monitor, ArrowLeft } from 'lucide-react';

export default function FirmwarePage() {
  const t = useTranslations('products.firmware');
  const common = useTranslations('common');
  const locale = useLocale();

  const features = [
    { key: 'userInterface', icon: Users },
    { key: 'history', icon: History },
    { key: 'diagnosis', icon: AlertCircle },
    { key: 'display', icon: Monitor },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a365d] to-[#2d4a7c] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Link href={`/${locale}`} className="inline-flex items-center text-gray-300 hover:text-white mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {common('backToProducts')}
          </Link>
          <Badge className="mb-4 bg-cyan-500 hover:bg-cyan-600">{t('badge')}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('name')}</h1>
          <p className="text-2xl text-[#f97316] font-medium mb-4">{t('tagline')}</p>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-8 bg-cyan-500 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-2xl font-bold">8</div>
              <div className="text-cyan-100">{t('userLevels')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold">500</div>
              <div className="text-cyan-100">{t('historyEntries')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold">16</div>
              <div className="text-cyan-100">{t('binaryOutputs')}</div>
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
                  <div className="w-12 h-12 rounded-lg bg-cyan-500 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-[#1a365d]">
                    {t(`features.${feature.key}.title`)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{t(`features.${feature.key}.content`)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Display Feature */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-[#f97316]">{t('industryFirst')}</Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {t('darkDisplayTitle')}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            {t('darkDisplayDesc')}
          </p>
          <div className="inline-block bg-gray-800 rounded-lg p-8 border border-gray-700">
            <div className="text-4xl font-mono text-cyan-400">
              ▓▓▓▓▓▓▓▓▓▓
            </div>
            <div className="text-sm text-gray-400 mt-2">{t('darkModeDisplay')}</div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a365d] mb-8 text-center">
            {t('upgradeBenefits')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {['benefit1', 'benefit2', 'benefit3', 'benefit4', 'benefit5', 'benefit6'].map((benefitKey, index) => (
              <div key={index} className="flex items-start space-x-3 p-4">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">{t(benefitKey)}</span>
              </div>
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
