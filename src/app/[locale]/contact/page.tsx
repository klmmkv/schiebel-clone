import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Globe } from 'lucide-react';

export default function ContactPage() {
  const t = useTranslations('contact');

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a365d] to-[#2d4a7c] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('title')}</h1>
          <p className="text-xl text-gray-300">{t('subtitle')}</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#1a365d] flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#1a365d] flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    {t('address.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg">
                    SCHIEBEL Antriebstechnik GmbH<br />
                    Josef Benc Gasse 4<br />
                    1230 Vienna, Austria
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#1a365d] flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#f97316] flex items-center justify-center">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    {t('phone.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="tel:+431661080" className="text-gray-600 text-lg hover:text-[#f97316] transition-colors">
                    +43 1 66 108
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#1a365d] flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#1a365d] flex items-center justify-center">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    {t('email.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="mailto:info@schiebel-actuators.com" className="text-gray-600 text-lg hover:text-[#f97316] transition-colors">
                    info@schiebel-actuators.com
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#1a365d] flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#f97316] flex items-center justify-center">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    {t('hours.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg">
                    {t('hours.weekdays')}<br />
                    {t('hours.weekend')}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div className="space-y-6">
              <Card className="overflow-hidden h-[400px] lg:h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.8547462839186!2d16.3089!3d48.1389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476da81b5d5f5f5f%3A0x0!2sJosef%20Benc%20Gasse%204%2C%201230%20Wien%2C%20Austria!5e0!3m2!1sen!2sat!4v1635000000000!5m2!1sen!2sat"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SCHIEBEL Location"
                  className="w-full h-full"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1a365d] text-white">
        <div className="container mx-auto px-4 text-center">
          <Globe className="h-12 w-12 mx-auto mb-6 text-[#f97316]" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('global.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('global.subtitle')}
          </p>
          <Button asChild size="lg" className="bg-[#f97316] hover:bg-[#ea580c]">
            <a href="mailto:info@schiebel-actuators.com">
              {t('global.cta')}
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
