import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Shield, Cog, Cpu, Settings, Droplet, Zap, Flame, Factory } from 'lucide-react';

export default function HomePage() {
  const t = useTranslations('home');
  const nav = useTranslations('nav');
  const apps = useTranslations('applications');
  const locale = useLocale();

  const products = [
    {
      name: 'Failsafe Series',
      tagline: 'Safe & Reliable',
      href: `/${locale}/products/failsafe-series`,
      icon: Shield,
      color: 'bg-red-500',
    },
    {
      name: 'AB Series',
      tagline: 'Traditional & Robust',
      href: `/${locale}/products/ab-series`,
      icon: Cog,
      color: 'bg-blue-500',
    },
    {
      name: 'CM Series',
      tagline: 'Smart & Flexible',
      href: `/${locale}/products/cm-series`,
      icon: Cpu,
      color: 'bg-green-500',
    },
    {
      name: 'Smartcon',
      tagline: 'One Interface Makes It All',
      href: `/${locale}/products/smartcon`,
      icon: Settings,
      color: 'bg-purple-500',
    },
  ];

  const applications = [
    { key: 'water', icon: Droplet },
    { key: 'power', icon: Zap },
    { key: 'oilGas', icon: Flame },
    { key: 'steel', icon: Factory },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a365d] via-[#2d4a7c] to-[#1a365d] text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4 py-24 md:py-32 relative">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-[#f97316] hover:bg-[#ea580c]">
              High-End Electric Actuators
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-[#f97316] hover:bg-[#ea580c]">
                <Link href={`/${locale}/products/cm-series`}>
                  {t('hero.cta')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href={`/${locale}/about`}>
                  {nav('aboutUs')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">
              {t('products.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('products.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link key={product.href} href={product.href}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${product.color} flex items-center justify-center mb-4`}>
                      <product.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="group-hover:text-[#f97316] transition-colors">
                      {product.name}
                    </CardTitle>
                    <CardDescription>{product.tagline}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="text-[#f97316] flex items-center text-sm font-medium">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Preview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">
              {t('applications.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('applications.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {applications.map((app) => (
              <Card key={app.key} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-[#1a365d] flex items-center justify-center mx-auto mb-4">
                    <app.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{apps(`${app.key}.title`)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {apps(`${app.key}.description`)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link href={`/${locale}/applications`}>
                {t('applications.viewAll')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#1a365d] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <Button asChild size="lg" className="bg-[#f97316] hover:bg-[#ea580c]">
            <a href="mailto:info@schiebel-actuators.com">
              {t('cta.button')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
