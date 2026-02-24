import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Droplet, Zap, Flame, Thermometer, Mountain, 
  FlaskConical, Factory, FileText, Anchor 
} from 'lucide-react';

export default function ApplicationsPage() {
  const t = useTranslations('applications');

  const applications = [
    { key: 'water', icon: Droplet, color: 'bg-blue-500' },
    { key: 'power', icon: Zap, color: 'bg-yellow-500' },
    { key: 'oilGas', icon: Flame, color: 'bg-orange-500' },
    { key: 'districtHeating', icon: Thermometer, color: 'bg-red-500' },
    { key: 'tunnel', icon: Mountain, color: 'bg-gray-500' },
    { key: 'chemical', icon: FlaskConical, color: 'bg-purple-500' },
    { key: 'steel', icon: Factory, color: 'bg-slate-500' },
    { key: 'paper', icon: FileText, color: 'bg-green-500' },
    { key: 'shipbuilding', icon: Anchor, color: 'bg-cyan-500' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a365d] to-[#2d4a7c] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('title')}</h1>
          <p className="text-xl text-gray-300 max-w-3xl">{t('subtitle')}</p>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app) => (
              <Card key={app.key} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-lg ${app.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <app.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl text-[#1a365d]">
                    {t(`${app.key}.title`)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {t(`${app.key}.description`)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a365d] mb-4">
            Don&apos;t see your industry?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our modular actuator solutions can be customized for virtually any application. Contact us to discuss your specific requirements.
          </p>
          <a 
            href="mailto:info@schiebel-actuators.com"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#f97316] text-white font-medium rounded-lg hover:bg-[#ea580c] transition-colors"
          >
            Contact Our Engineers
          </a>
        </div>
      </section>
    </div>
  );
}
