import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, Cpu, Wrench, CheckCircle, ArrowLeft } from 'lucide-react';

export default function FailsafeSeriesPage() {
  const t = useTranslations('products.failsafe');
  const common = useTranslations('common');
  const products = useTranslations('products');

  const features = [
    { key: 'technology', icon: Cpu },
    { key: 'design', icon: Shield },
    { key: 'engineering', icon: Wrench },
    { key: 'availability', icon: CheckCircle },
  ];

  const sizes = [
    { model: 'CM 03', torque: 'up to 32 Nm' },
    { model: 'CM 06', torque: 'up to 64 Nm' },
    { model: 'CM 12', torque: 'up to 125 Nm' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a365d] to-[#2d4a7c] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Link href="/products/cm-series" className="inline-flex items-center text-gray-300 hover:text-white mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {common('backToProducts')}
          </Link>
          <Badge className="mb-4 bg-red-500 hover:bg-red-600">Failsafe Technology</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('name')}</h1>
          <p className="text-2xl text-[#f97316] font-medium mb-4">{t('tagline')}</p>
          <p className="text-xl text-gray-300 max-w-3xl">{t('description')}</p>
        </div>
      </section>

      {/* Key Benefit */}
      <section className="py-8 bg-[#f97316] text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg md:text-xl font-medium">
            ⚡ Power failure? Valves return to safe position in less than 1 second!
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <Card key={feature.key} className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-red-500 flex items-center justify-center mb-4">
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

      {/* Sizes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a365d] mb-8 text-center">
            {products('sizes')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {sizes.map((size) => (
              <Card key={size.model} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-[#1a365d] mb-2">{size.model}</div>
                  <div className="text-gray-600">
                    <span className="font-medium">{products('torque')}:</span> {size.torque}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1a365d] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need a Failsafe solution for your application?
          </h2>
          <p className="text-gray-300 mb-8">
            Contact our engineers to discuss your safety requirements.
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
