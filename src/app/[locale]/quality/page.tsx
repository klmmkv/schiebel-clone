import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Award, CheckCircle } from 'lucide-react';

export default function QualityPage() {
  const t = useTranslations('quality');

  const safetyCerts = [
    'International EX approvals',
    'SIL manufacturer certifications',
    'Country-specific certifications',
    'Customer-specific certifications',
    'Nuclear certification',
  ];

  const qualityCerts = [
    'ISO 9001 Certification',
    'ISO 45001 Certification',
    'ISO 14001 Certification',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a365d] to-[#2d4a7c] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('title')}</h1>
          <p className="text-xl text-gray-300">{t('subtitle')}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Safety Section */}
            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-red-500 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-[#1a365d]">{t('safety.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{t('safety.content')}</p>
                <div>
                  <h4 className="font-semibold text-[#1a365d] mb-3">{t('certifications.safety')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {safetyCerts.map((cert) => (
                      <Badge key={cert} variant="secondary" className="flex items-center gap-1">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quality Management Section */}
            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-[#1a365d]">{t('qualityManagement.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{t('qualityManagement.content')}</p>
                <div>
                  <h4 className="font-semibold text-[#1a365d] mb-3">{t('certifications.quality')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {qualityCerts.map((cert) => (
                      <Badge key={cert} variant="secondary" className="flex items-center gap-1">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Standards Banner */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a365d] mb-8">
              Certified to International Standards
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {['ISO 9001', 'ISO 45001', 'ISO 14001', 'SIL', 'ATEX'].map((standard) => (
                <div key={standard} className="bg-white rounded-lg shadow-md px-8 py-6 border-t-4 border-[#f97316]">
                  <div className="text-2xl font-bold text-[#1a365d]">{standard}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
