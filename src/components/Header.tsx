'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ChevronDown, Menu, Cog, Shield, Cpu, Settings, Layers, Info, Award } from 'lucide-react';

export function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const aboutLinks = [
    { href: `/${locale}/about`, label: t('about.company'), icon: Info },
    { href: `/${locale}/quality`, label: t('about.quality'), icon: Award },
  ];

  const productLinks = [
    { href: `/${locale}/products/cm-series`, label: 'CM Series', icon: Cpu },
    { href: `/${locale}/products/ab-series`, label: 'AB Series', icon: Cog },
    { href: `/${locale}/products/failsafe-series`, label: 'Failsafe Series', icon: Shield },
    { href: `/${locale}/products/smartcon`, label: 'Smartcon', icon: Settings },
    { href: `/${locale}/products/firmware`, label: 'Firmware 1.600', icon: Layers },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center space-x-2">
          <div className="flex items-center">
            <span className="text-xl font-bold text-primary">SCHIEBEL</span>
            <span className="ml-1 text-xs text-muted-foreground hidden sm:inline">Antriebstechnik</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            href={`/${locale}`} 
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            {t('home')}
          </Link>

          {/* About Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-sm font-medium h-auto p-0 hover:bg-transparent hover:text-primary">
                {t('about.title')}
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              {aboutLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href} className="flex items-center gap-2 cursor-pointer">
                    <link.icon className="h-4 w-4" />
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Products Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-sm font-medium h-auto p-0 hover:bg-transparent hover:text-primary">
                {t('products.title')}
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              {productLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href} className="flex items-center gap-2 cursor-pointer">
                    <link.icon className="h-4 w-4" />
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link 
            href={`/${locale}/applications`} 
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            {t('applications')}
          </Link>

          <Link 
            href={`/${locale}/references`} 
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            {t('references')}
          </Link>

          <Link 
            href={`/${locale}/contact`} 
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            {t('contact')}
          </Link>
        </nav>

        {/* Right side: Language Switcher + Mobile Menu */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link 
                  href={`/${locale}`} 
                  className="text-lg font-medium hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {t('home')}
                </Link>

                <div className="space-y-2">
                  <p className="text-lg font-medium text-muted-foreground">{t('about.title')}</p>
                  <div className="pl-4 space-y-2">
                    {aboutLinks.map((link) => (
                      <Link 
                        key={link.href}
                        href={link.href} 
                        className="flex items-center gap-2 text-sm hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        <link.icon className="h-4 w-4" />
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-lg font-medium text-muted-foreground">{t('products.title')}</p>
                  <div className="pl-4 space-y-2">
                    {productLinks.map((link) => (
                      <Link 
                        key={link.href}
                        href={link.href} 
                        className="flex items-center gap-2 text-sm hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        <link.icon className="h-4 w-4" />
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link 
                  href={`/${locale}/applications`} 
                  className="text-lg font-medium hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {t('applications')}
                </Link>

                <Link 
                  href={`/${locale}/references`} 
                  className="text-lg font-medium hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {t('references')}
                </Link>

                <Link 
                  href={`/${locale}/contact`} 
                  className="text-lg font-medium hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {t('contact')}
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
