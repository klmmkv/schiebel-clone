'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { Mail, Phone, MapPin, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-white">SCHIEBEL</h3>
              <p className="text-sm text-slate-400">Antriebstechnik GmbH</p>
            </div>
            <p className="text-sm text-slate-400">
              {t('tagline')}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/schiebel-antriebstechnik-gmbh/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://www.youtube.com/channel/UCWGCY0xrvppNBgqqpnwAZmA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">{t('contact')}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-slate-400 flex-shrink-0" />
                <span>Josef Benc Gasse 4<br />1230 Vienna, Austria</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-slate-400" />
                <a href="tel:+4316610" className="hover:text-white transition-colors">
                  +43 1 66 108
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-slate-400" />
                <a href="mailto:info@schiebel-actuators.com" className="hover:text-white transition-colors">
                  info@schiebel-actuators.com
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">{t('products')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}/products/cm-series`} className="hover:text-white transition-colors">
                  CM Series
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products/ab-series`} className="hover:text-white transition-colors">
                  AB Series
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products/failsafe-series`} className="hover:text-white transition-colors">
                  Failsafe Series
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products/smartcon`} className="hover:text-white transition-colors">
                  Smartcon
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">{t('quickLinks')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}/about`} className="hover:text-white transition-colors">
                  {t('aboutUs')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/applications`} className="hover:text-white transition-colors">
                  {t('applications')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/references`} className="hover:text-white transition-colors">
                  {t('references')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="hover:text-white transition-colors">
                  {t('contactUs')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} SCHIEBEL Antriebstechnik GmbH. {t('rights')}
          </p>
          <div className="flex gap-6 text-sm text-slate-400">
            <Link href={`/${locale}/privacy`} className="hover:text-white transition-colors">
              {t('privacy')}
            </Link>
            <Link href={`/${locale}/imprint`} className="hover:text-white transition-colors">
              {t('imprint')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
