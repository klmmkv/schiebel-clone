import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
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
      <section className="bg-gradient-to-br from-[#1a365d] to-[#2d4a7c] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Link href={`/${locale}`} className="inline-flex items-center text-gray-300 hover:text-white mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {common('backToProducts')}
          </Link>
          <Badge className="mb-4 bg-blue-500 hover:bg-blue-600">Traditional Excellence</Badge>
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
              <div className="text-blue-100">Standard Safety</div>
            </div>
            <div>
              <div className="text-2xl font-bold">SIL-3</div>
              <div className="text-blue-100">With Failsafe</div>
            </div>
            <div>
              <div className="text-2xl font-bold">ATEX IIC</div>
              <div className="text-blue-100">Hydrogen Ready</div>
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
            Perfect for Heavy-Duty Applications
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Power Plants', 'Steel Industry', 'Oil & Gas', 'Chemical Plants', 'Water Treatment'].map((app) => (
              <Badge key={app} variant="secondary" className="px-4 py-2 text-sm">
                {app}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1a365d] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need a robust actuator solution?
          </h2>
          <p className="text-gray-300 mb-8">
            The AB Series delivers maximum performance for demanding applications.
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
