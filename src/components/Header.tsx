'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { useState } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const productLinks = [
    { href: '/products/failsafe-series', label: t('failsafe') },
    { href: '/products/ab-series', label: t('abSeries') },
    { href: '/products/cm-series', label: t('cmSeries') },
    { href: '/products/smartcon', label: t('smartcon') },
    { href: '/products/firmware', label: t('firmware') },
  ];

  const aboutLinks = [
    { href: '/about', label: t('aboutUs') },
    { href: '/quality', label: t('quality') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-[#1a365d]">SCHIEBEL</span>
          <span className="text-sm text-gray-500 hidden sm:inline">Antriebstechnik</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {/* About Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-[#1a365d] transition-colors">
                <span>{t('about')}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              {aboutLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href} className="w-full cursor-pointer">
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Products Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-[#1a365d] transition-colors">
                <span>{t('products')}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              {productLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href} className="w-full cursor-pointer">
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/applications" className="text-sm font-medium text-gray-700 hover:text-[#1a365d] transition-colors">
            {t('applications')}
          </Link>

          <Link href="/references" className="text-sm font-medium text-gray-700 hover:text-[#1a365d] transition-colors">
            {t('references')}
          </Link>

          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                <Globe className="h-4 w-4" />
                <span className="uppercase">{locale}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href={pathname} locale="en" className="w-full cursor-pointer">
                  English
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={pathname} locale="ru" className="w-full cursor-pointer">
                  Русский
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <Globe className="h-4 w-4" />
                <span className="uppercase ml-1">{locale}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href={pathname} locale="en" className="w-full cursor-pointer">
                  English
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={pathname} locale="ru" className="w-full cursor-pointer">
                  Русский
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <div className="space-y-2">
                  <p className="font-semibold text-[#1a365d]">{t('about')}</p>
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block pl-4 py-2 text-gray-600 hover:text-[#1a365d]"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-[#1a365d]">{t('products')}</p>
                  {productLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block pl-4 py-2 text-gray-600 hover:text-[#1a365d]"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <Link
                  href="/applications"
                  className="font-semibold text-[#1a365d]"
                  onClick={() => setIsOpen(false)}
                >
                  {t('applications')}
                </Link>
                <Link
                  href="/references"
                  className="font-semibold text-[#1a365d]"
                  onClick={() => setIsOpen(false)}
                >
                  {t('references')}
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
