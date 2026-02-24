'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Building2, 
  MapPin, 
  Factory, 
  Layers,
  Grid3X3,
  List,
  Filter
} from 'lucide-react';

interface Reference {
  company: string;
  country: string;
  industry: string;
  sector: string;
  products: string;
}

interface ReferenceTableProps {
  references: Reference[];
  title?: string;
  description?: string;
}

export function ReferenceTable({ references, title, description }: ReferenceTableProps) {
  const t = useTranslations('references');
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table');
  const [industryFilter, setIndustryFilter] = useState<string>('all');

  // Get unique industries
  const industries = ['all', ...new Set(references.map(r => r.industry))];

  // Filter references
  const filteredReferences = industryFilter === 'all' 
    ? references 
    : references.filter(r => r.industry === industryFilter);

  // Industry color mapping
  const industryColors: Record<string, string> = {
    'Oil & Gas': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
    'Power Plants': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
    'Water & Wastewater': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    'Chemical': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
    'Paper': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    'Steel': 'bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-300',
    'Shipbuilding': 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300',
    'Tunnel Construction': 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
    'District Heating': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        {(title || description) && (
          <div className="mb-8">
            {title && <h2 className="text-3xl font-bold tracking-tight">{title}</h2>}
            {description && (
              <p className="text-muted-foreground mt-2 max-w-3xl">{description}</p>
            )}
          </div>
        )}

        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          {/* Industry Filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <div className="flex flex-wrap gap-2">
              {industries.map((industry) => (
                <Button
                  key={industry}
                  variant={industryFilter === industry ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setIndustryFilter(industry)}
                  className="text-xs"
                >
                  {industry === 'all' ? t('allIndustries') : industry}
                </Button>
              ))}
            </div>
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-1 border rounded-lg p-1">
            <Button
              variant={viewMode === 'table' ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('table')}
              className="h-8 px-3"
            >
              <List className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'cards' ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('cards')}
              className="h-8 px-3"
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-muted-foreground mb-4">
          {t('showing', { count: filteredReferences.length })}
        </p>

        {/* Table View */}
        {viewMode === 'table' && (
          <div className="rounded-lg border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-semibold">{t('company')}</TableHead>
                  <TableHead className="font-semibold">{t('country')}</TableHead>
                  <TableHead className="font-semibold">{t('industry')}</TableHead>
                  <TableHead className="font-semibold">{t('sector')}</TableHead>
                  <TableHead className="font-semibold">{t('products')}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredReferences.map((ref, index) => (
                  <TableRow key={index} className="hover:bg-muted/30">
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-muted-foreground" />
                        {ref.company}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        {ref.country}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant="secondary" 
                        className={industryColors[ref.industry] || ''}
                      >
                        {ref.industry}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {ref.sector}
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {ref.products.split(', ').map((product, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {product.replace(' & ', ', ')}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}

        {/* Cards View */}
        {viewMode === 'cards' && (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredReferences.map((ref, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Building2 className="h-5 w-5 text-primary" />
                        {ref.company}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3" />
                        {ref.country}
                      </CardDescription>
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={`text-xs ${industryColors[ref.industry] || ''}`}
                    >
                      {ref.industry}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2 text-sm">
                      <Factory className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <span className="text-muted-foreground">{ref.sector}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <Layers className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <div className="flex flex-wrap gap-1">
                        {ref.products.split(', ').map((product, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {product.replace(' & ', ', ')}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
