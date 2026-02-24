'use client';

import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Settings, 
  Shield, 
  Cpu, 
  Layers, 
  Zap, 
  Globe, 
  Wrench,
  CheckCircle,
  LucideIcon
} from 'lucide-react';

interface Feature {
  title: string;
  content: string;
  icon?: string;
}

interface FeatureSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  features: Feature[];
  variant?: 'grid' | 'list' | 'cards';
  columns?: 2 | 3 | 4;
  showIcons?: boolean;
  badge?: string;
}

const iconMap: Record<string, LucideIcon> = {
  technology: Cpu,
  design: Layers,
  engineering: Wrench,
  availability: CheckCircle,
  performance: Zap,
  robustness: Shield,
  safety: Shield,
  flexibility: Settings,
  digitalization: Globe,
  modular: Layers,
  haptics: Settings,
  security: Shield,
  default: CheckCircle,
};

function getIcon(title: string): LucideIcon {
  const key = title.toLowerCase();
  for (const [iconKey, icon] of Object.entries(iconMap)) {
    if (key.includes(iconKey)) {
      return icon;
    }
  }
  return iconMap.default;
}

export function FeatureSection({
  title,
  subtitle,
  description,
  features,
  variant = 'grid',
  columns = 2,
  showIcons = true,
  badge,
}: FeatureSectionProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  if (variant === 'list') {
    return (
      <section className="py-12">
        <div className="container mx-auto px-4">
          {(title || badge) && (
            <div className="mb-8">
              {badge && (
                <Badge variant="secondary" className="mb-3">
                  {badge}
                </Badge>
              )}
              {title && (
                <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
              )}
              {subtitle && (
                <p className="text-xl text-muted-foreground mt-2">{subtitle}</p>
              )}
              {description && (
                <p className="text-muted-foreground mt-4 max-w-3xl">{description}</p>
              )}
            </div>
          )}

          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = getIcon(feature.title);
              return (
                <div 
                  key={index} 
                  className="flex gap-4 p-6 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  {showIcons && (
                    <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10 text-primary h-fit">
                      <Icon className="h-5 w-5" />
                    </div>
                  )}
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'cards') {
    return (
      <section className="py-12">
        <div className="container mx-auto px-4">
          {(title || badge) && (
            <div className="text-center mb-12">
              {badge && (
                <Badge variant="secondary" className="mb-3">
                  {badge}
                </Badge>
              )}
              {title && (
                <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
              )}
              {subtitle && (
                <p className="text-xl text-muted-foreground mt-2">{subtitle}</p>
              )}
              {description && (
                <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">{description}</p>
              )}
            </div>
          )}

          <div className={`grid gap-6 ${gridCols[columns]}`}>
            {features.map((feature, index) => {
              const Icon = getIcon(feature.title);
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    {showIcons && (
                      <div className="p-2 rounded-lg bg-primary/10 text-primary w-fit mb-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                    )}
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{feature.content}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  // Default: grid variant
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {(title || badge) && (
          <div className="text-center mb-12">
            {badge && (
              <Badge variant="secondary" className="mb-3">
                {badge}
              </Badge>
            )}
            {title && (
              <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
            )}
            {subtitle && (
              <p className="text-xl text-muted-foreground mt-2">{subtitle}</p>
            )}
            {description && (
              <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">{description}</p>
            )}
          </div>
        )}

        <div className={`grid gap-8 ${gridCols[columns]}`}>
          {features.map((feature, index) => {
            const Icon = getIcon(feature.title);
            return (
              <div key={index} className="group">
                <div className="flex items-start gap-4">
                  {showIcons && (
                    <div className="flex-shrink-0 p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                  )}
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.content}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
