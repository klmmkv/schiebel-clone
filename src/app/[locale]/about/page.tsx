import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, TrendingUp, Lightbulb, Heart, Cpu } from 'lucide-react';

export default function AboutPage() {
  const t = useTranslations('about');

  const sections = [
    { key: 'whoWeAre', icon: Users, hasSubtitle: true },
    { key: 'newEra', icon: TrendingUp, hasSubtitle: false },
    { key: 'innovations', icon: Lightbulb, hasSubtitle: false },
    { key: 'customerOrientation', icon: Heart, hasSubtitle: false },
    { key: 'industry40', icon: Cpu, hasSubtitle: false },
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

      {/* Content Sections */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <Card key={section.key} className={`overflow-hidden ${index % 2 === 1 ? 'bg-gray-50' : ''}`}>
                <CardHeader className="flex flex-row items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-[#1a365d] flex items-center justify-center flex-shrink-0">
                    <section.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-[#1a365d]">
                      {t(`${section.key}.title`)}
                    </CardTitle>
                    {section.hasSubtitle && (
                      <p className="text-[#f97316] font-medium mt-1">
                        {t(`${section.key}.subtitle`)}
                      </p>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-lg max-w-none text-gray-600">
                    {t(`${section.key}.content`).split('\n\n').map((paragraph, i) => (
                      <p key={i} className="mb-4 last:mb-0">{paragraph}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#1a365d] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#f97316]">50+</div>
              <div className="text-gray-300 mt-2">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#f97316]">100+</div>
              <div className="text-gray-300 mt-2">Employees</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#f97316]">30</div>
              <div className="text-gray-300 mt-2">Distribution Partners</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#f97316]">Vienna</div>
              <div className="text-gray-300 mt-2">Headquarters</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
