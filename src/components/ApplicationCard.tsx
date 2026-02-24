'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Droplet, 
  Zap, 
  Flame, 
  Thermometer, 
  Mountain, 
  FlaskConical, 
  Factory, 
  FileText, 
  Anchor,
  LucideIcon,
  ArrowRight
} from 'lucide-react';

interface ApplicationCardProps {
  id: string;
  title: string;
  description: string;
  icon?: string;
  href?: string;
  variant?: 'default' | 'compact' | 'featured';
}

const iconMap: Record<string, LucideIcon> = {
  droplet: Droplet,
  water: Droplet,
  zap: Zap,
  power: Zap,
  flame: Flame,
  'oil-gas': Flame,
  thermometer: Thermometer,
  'district-heating': Thermometer,
  mountain: Mountain,
  tunnel: Mountain,
  flask: FlaskConical,
  chemical: FlaskConical,
  factory: Factory,
  steel: Factory,
  'file-text': FileText,
  paper: FileText,
  anchor: Anchor,
  shipbuilding: Anchor,
};

function getIcon(iconName?: string, id?: string): LucideIcon {
  if (iconName && iconMap[iconName]) {
    return iconMap[iconName];
  }
  if (id && iconMap[id]) {
    return iconMap[id];
  }
  return Factory; // default
}

export function ApplicationCard({
  id,
  title,
  description,
  icon,
  href,
  variant = 'default',
}: ApplicationCardProps) {
  const locale = useLocale();
  const Icon = getIcon(icon, id);
  const linkHref = href || `/${locale}/applications#${id}`;

  if (variant === 'compact') {
    return (
      <Link href={linkHref} className="group block">
        <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
          <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Icon className="h-5 w-5" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium truncate group-hover:text-primary transition-colors">
              {title}
            </h3>
          </div>
          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </div>
      </Link>
    );
  }

  if (variant === 'featured') {
    return (
      <Link href={linkHref} className="group block">
        <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-2 hover:border-primary/50">
          <div className="aspect-video bg-gradient-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center">
            <div className="p-6 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
              <Icon className="h-12 w-12" />
            </div>
          </div>
          <CardHeader>
            <CardTitle className="group-hover:text-primary transition-colors">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-sm leading-relaxed">
              {description}
            </CardDescription>
            <div className="flex items-center gap-2 mt-4 text-primary font-medium text-sm">
              Learn more
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </CardContent>
        </Card>
      </Link>
    );
  }

  // Default variant
  return (
    <Link href={linkHref} className="group block">
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <CardHeader className="pb-3">
          <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Icon className="h-6 w-6" />
          </div>
          <CardTitle className="text-lg group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm leading-relaxed">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}

// Grid wrapper component for convenience
interface ApplicationGridProps {
  applications: Array<{
    id: string;
    title: string;
    description: string;
    icon?: string;
  }>;
  variant?: 'default' | 'compact' | 'featured';
  columns?: 2 | 3 | 4;
}

export function ApplicationGrid({ 
  applications, 
  variant = 'default',
  columns = 3 
}: ApplicationGridProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid gap-6 ${gridCols[columns]}`}>
      {applications.map((app) => (
        <ApplicationCard
          key={app.id}
          id={app.id}
          title={app.title}
          description={app.description}
          icon={app.icon}
          variant={variant}
        />
      ))}
    </div>
  );
}
