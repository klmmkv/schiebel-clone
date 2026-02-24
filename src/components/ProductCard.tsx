'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cog, Shield, Cpu, Settings, Layers } from 'lucide-react';

interface ProductCardProps {
  name: string;
  tagline: string;
  slug: string;
  description?: string;
  features?: string[];
  isNew?: boolean;
  isFeatured?: boolean;
}

const productIcons: Record<string, typeof Cog> = {
  'cm-series': Cpu,
  'ab-series': Cog,
  'failsafe-series': Shield,
  'smartcon': Settings,
  'firmware': Layers,
};

export function ProductCard({
  name,
  tagline,
  slug,
  description,
  features,
  isNew = false,
  isFeatured = false,
}: ProductCardProps) {
  const locale = useLocale();
  const Icon = productIcons[slug] || Cog;

  return (
    <Card className={`group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
      isFeatured ? 'border-primary/50 bg-gradient-to-br from-primary/5 to-transparent' : ''
    }`}>
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <CardHeader className="relative">
        <div className="flex items-start justify-between">
          <div className="p-2 rounded-lg bg-primary/10 text-primary mb-3">
            <Icon className="h-6 w-6" />
          </div>
          <div className="flex gap-2">
            {isNew && (
              <Badge variant="default" className="bg-green-500 hover:bg-green-600">
                NEW
              </Badge>
            )}
            {isFeatured && (
              <Badge variant="secondary">
                Featured
              </Badge>
            )}
          </div>
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {name}
        </CardTitle>
        <CardDescription className="text-base font-medium text-primary/80">
          {tagline}
        </CardDescription>
      </CardHeader>

      <CardContent className="relative">
        {description && (
          <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
            {description}
          </p>
        )}
        
        {features && features.length > 0 && (
          <ul className="space-y-1">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        )}
      </CardContent>

      <CardFooter className="relative">
        <Button asChild variant="ghost" className="group/btn p-0 h-auto hover:bg-transparent">
          <Link href={`/${locale}/products/${slug}`} className="flex items-center text-primary font-medium">
            Learn more
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
