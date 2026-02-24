import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function ReferencesPage() {
  const t = useTranslations('references');

  const references = [
    { company: 'Regas', country: 'Italy', industry: 'Oil & Gas', sector: 'Midstream', products: 'CM Series' },
    { company: 'British Petroleum', country: 'United Kingdom', industry: 'Oil & Gas', sector: 'Downstream', products: 'AB & CM Failsafe' },
    { company: 'Siemens', country: 'Germany', industry: 'Power Plants', sector: 'Combined cycle power plant', products: 'AB, CM & CM Failsafe' },
    { company: 'Terna', country: 'Greece', industry: 'Power Plants', sector: 'Coal fired power plant', products: 'AB & AB Failsafe' },
    { company: 'Voith Hydro', country: 'Austria', industry: 'Power Plants', sector: 'Pelton turbines', products: 'CM & CM Failsafe' },
    { company: 'Athens Waterworks', country: 'Greece', industry: 'Water & Wastewater', sector: 'Drinking water', products: 'CM' },
    { company: 'City of Subotica', country: 'Serbia', industry: 'Water & Wastewater', sector: 'Waste water', products: 'AB' },
    { company: 'ILF', country: 'Austria', industry: 'Water & Wastewater', sector: 'Artificial snow systems', products: 'AB' },
    { company: 'BASF', country: 'Germany', industry: 'Chemical', sector: 'Chemical & petrochemical', products: 'AB Failsafe' },
    { company: 'Panjapol Paper', country: 'Thailand', industry: 'Paper', sector: 'Pulp & paper', products: 'AB' },
    { company: 'Voest Alpine Stahl', country: 'Austria', industry: 'Steel', sector: 'Metal & steel', products: 'AB' },
    { company: 'ThyssenKrupp Marine Services', country: 'Germany', industry: 'Shipbuilding', sector: 'Ship building', products: 'CM' },
    { company: 'Sirocco Luft- und Tunneltechnik', country: 'Austria', industry: 'Tunnel Construction', sector: 'Tunnel ventilation', products: 'AB, CM, AB Failsafe & CM Failsafe' },
    { company: 'Allied Engineering Consultant', country: 'UAE', industry: 'District Heating', sector: 'HVAC, district heating & cooling', products: 'AB, CM' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a365d] to-[#2d4a7c] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('title')}</h1>
          <p className="text-xl text-gray-300">{t('subtitle')}</p>
        </div>
      </section>

      {/* Desktop Table View */}
      <section className="py-16 md:py-24 hidden lg:block">
        <div className="container mx-auto px-4">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">{t('company')}</TableHead>
                    <TableHead className="font-semibold">{t('country')}</TableHead>
                    <TableHead className="font-semibold">{t('industry')}</TableHead>
                    <TableHead className="font-semibold">{t('sector')}</TableHead>
                    <TableHead className="font-semibold">{t('products')}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {references.map((ref, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{ref.company}</TableCell>
                      <TableCell>{ref.country}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{ref.industry}</Badge>
                      </TableCell>
                      <TableCell className="text-gray-600">{ref.sector}</TableCell>
                      <TableCell>
                        <Badge className="bg-[#f97316] hover:bg-[#ea580c]">{ref.products}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mobile Card View */}
      <section className="py-16 md:py-24 lg:hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {references.map((ref, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg text-[#1a365d] mb-2">{ref.company}</h3>
                  <div className="space-y-1 text-sm text-gray-600 mb-3">
                    <p><span className="font-medium">{t('country')}:</span> {ref.country}</p>
                    <p><span className="font-medium">{t('sector')}:</span> {ref.sector}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">{ref.industry}</Badge>
                    <Badge className="bg-[#f97316] hover:bg-[#ea580c]">{ref.products}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#1a365d] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#f97316]">50+</div>
              <div className="text-gray-300 mt-2">Countries</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#f97316]">9</div>
              <div className="text-gray-300 mt-2">Industries</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#f97316]">1000+</div>
              <div className="text-gray-300 mt-2">Projects</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#f97316]">30+</div>
              <div className="text-gray-300 mt-2">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
