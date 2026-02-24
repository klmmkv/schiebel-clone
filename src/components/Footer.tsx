'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');
  const locale = useLocale();

  return (
    <footer className="bg-[#1a365d] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">{t('company')}</h3>
            <p className="text-gray-300">{t('tagline')}</p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/schiebel-antriebstechnik-gmbh/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#f97316] transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCWGCY0xrvppNBgqqpnwAZmA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#f97316] transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/about`} className="text-gray-300 hover:text-[#f97316] transition-colors">
                  {nav('aboutUs')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/quality`} className="text-gray-300 hover:text-[#f97316] transition-colors">
                  {nav('quality')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/applications`} className="text-gray-300 hover:text-[#f97316] transition-colors">
                  {nav('applications')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/references`} className="text-gray-300 hover:text-[#f97316] transition-colors">
                  {nav('references')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{nav('products')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/products/failsafe-series`} className="text-gray-300 hover:text-[#f97316] transition-colors">
                  {nav('failsafe')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products/ab-series`} className="text-gray-300 hover:text-[#f97316] transition-colors">
                  {nav('abSeries')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products/cm-series`} className="text-gray-300 hover:text-[#f97316] transition-colors">
                  {nav('cmSeries')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products/smartcon`} className="text-gray-300 hover:text-[#f97316] transition-colors">
                  {nav('smartcon')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#f97316] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Josef Benc Gasse 4, 1230 Vienna, Austria</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#f97316] flex-shrink-0" />
                <a href="tel:+4316610 8" className="text-gray-300 hover:text-[#f97316] transition-colors">
                  +43 1 66 108
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#f97316] flex-shrink-0" />
                <a href="mailto:info@schiebel-actuators.com" className="text-gray-300 hover:text-[#f97316] transition-colors">
                  info@schiebel-actuators.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SCHIEBEL Antriebstechnik. {t('rights')}</p>
        </div>
      </div>
    </footer>
  );
}
