import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Hand, Cpu, Wifi, Lock, ArrowLeft } from 'lucide-react';

export default function SmartconPage() {
  const t = useTranslations('products.smartcon');
  const common = useTranslations('common');
  const locale = useLocale();

  const features = [
    { key: 'haptics', icon: Hand },
    { key: 'technology', icon: Cpu },
    { key: 'digitalization', icon: Wifi },
    { key: 'security', icon: Lock },
  ];

  const protocols = ['Profibus', 'Modbus RTU', 'Modbus TCP', 'Ethernet/IP', 'DeviceNET', 'Ethernet Powerlink', 'HART'];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a365d] to-[#2d4a7c] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Link href={`/${locale}`} className="inline-flex items-center text-gray-300 hover:text-white mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {common('backToProducts')}
          </Link>
          <Badge className="mb-4 bg-purple-500 hover:bg-purple-600">Control System</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('name')}</h1>
          <p className="text-2xl text-[#f97316] font-medium mb-4">{t('tagline')}</p>
          <p className="text-xl text-gray-300 max-w-3xl">{t('description')}</p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <Card key={feature.key} className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center mb-4">
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

      {/* Protocols */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a365d] mb-8 text-center">
            {t('protocols')}
          </h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {protocols.map((protocol) => (
              <Badge 
                key={protocol} 
                variant="secondary" 
                className="px-6 py-3 text-base bg-white shadow-sm"
              >
                {protocol}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <Wifi className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold text-[#1a365d] mb-2">IR & BT Integration</h3>
              <p className="text-gray-600">Integrated infrared and Bluetooth technology for easy parameterization</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <Cpu className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold text-[#1a365d] mb-2">Industry 4.0 Ready</h3>
              <p className="text-gray-600">Prepared for IoT and comprehensive networking solutions</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <Lock className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold text-[#1a365d] mb-2">Multi-Level Security</h3>
              <p className="text-gray-600">Sophisticated user level system for authorized access only</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1a365d] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Want to learn more about Smartcon?
          </h2>
          <p className="text-gray-300 mb-8">
            Discover how our intelligent control system can enhance your operations.
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
