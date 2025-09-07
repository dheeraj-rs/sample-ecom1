'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  TrendingDown, 
  Minus,
  TreePine,
  Hammer,
  Clock,
  DollarSign
} from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const woodPrices = [
  {
    type: 'White Oak',
    currentPrice: 12.50,
    previousPrice: 11.80,
    unit: 'per board foot',
    trend: 'up',
    change: 5.9,
    availability: 85,
    description: 'Premium hardwood with beautiful grain patterns',
    origin: 'North Carolina',
    sustainabilityScore: 95
  },
  {
    type: 'Black Walnut',
    currentPrice: 18.75,
    previousPrice: 19.20,
    unit: 'per board foot',
    trend: 'down',
    change: -2.3,
    availability: 72,
    description: 'Rich chocolate brown wood with stunning figure',
    origin: 'Virginia',
    sustainabilityScore: 92
  },
  {
    type: 'Cherry',
    currentPrice: 15.25,
    previousPrice: 15.25,
    unit: 'per board foot',
    trend: 'stable',
    change: 0,
    availability: 90,
    description: 'Beautiful reddish wood that ages gracefully',
    origin: 'Pennsylvania',
    sustainabilityScore: 88
  },
  {
    type: 'Hard Maple',
    currentPrice: 9.80,
    previousPrice: 9.45,
    unit: 'per board foot',
    trend: 'up',
    change: 3.7,
    availability: 95,
    description: 'Dense, light-colored wood perfect for fine furniture',
    origin: 'Vermont',
    sustainabilityScore: 90
  },
  {
    type: 'Mahogany',
    currentPrice: 22.40,
    previousPrice: 21.90,
    unit: 'per board foot',
    trend: 'up',
    change: 2.3,
    availability: 60,
    description: 'Exotic hardwood with rich reddish-brown color',
    origin: 'Honduras (FSC Certified)',
    sustainabilityScore: 85
  },
  {
    type: 'Eastern Pine',
    currentPrice: 4.25,
    previousPrice: 4.50,
    unit: 'per board foot',
    trend: 'down',
    change: -5.6,
    availability: 98,
    description: 'Softwood with rustic charm and character',
    origin: 'North Carolina',
    sustainabilityScore: 96
  }
];

const laborRates = [
  {
    skill: 'Master Craftsman',
    rate: 85,
    unit: 'per hour',
    experience: '20+ years',
    specialties: ['Complex Joinery', 'Hand Carving', 'Restoration']
  },
  {
    skill: 'Senior Craftsman',
    rate: 65,
    unit: 'per hour',
    experience: '10-20 years',
    specialties: ['Custom Furniture', 'Fine Finishing', 'Design']
  },
  {
    skill: 'Craftsman',
    rate: 45,
    unit: 'per hour',
    experience: '5-10 years',
    specialties: ['General Woodworking', 'Assembly', 'Sanding']
  },
  {
    skill: 'Apprentice',
    rate: 25,
    unit: 'per hour',
    experience: '1-5 years',
    specialties: ['Preparation', 'Basic Assembly', 'Finishing']
  }
];

export default function PricingPage() {
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  useEffect(() => {
    // Simulate real-time price updates
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-600" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-600" />;
      default:
        return <Minus className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up':
        return 'text-green-600';
      case 'down':
        return 'text-red-600';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container-padding max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl mb-6 text-balance">
              Current Wood & Labor Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Transparent pricing updated in real-time. Our commitment to fair pricing means you always know exactly what goes into your custom furniture.
            </p>
            <div className="mt-6 text-sm text-muted-foreground">
              Last updated: {lastUpdated.toLocaleString()}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Wood Pricing */}
      <section className="section-padding">
        <div className="container-padding max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <TreePine className="w-8 h-8 text-primary" />
              <h2 className="font-heading text-2xl lg:text-3xl">Wood Pricing</h2>
            </div>
            <p className="text-muted-foreground max-w-3xl">
              All wood is sustainably sourced and FSC certified. Prices fluctuate based on market conditions and availability.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {woodPrices.map((wood, index) => (
              <motion.div
                key={wood.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{wood.type}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          {wood.origin}
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        {getTrendIcon(wood.trend)}
                        <span className={`text-sm font-medium ${getTrendColor(wood.trend)}`}>
                          {wood.change > 0 ? '+' : ''}{wood.change}%
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="mb-4">
                      <div className="text-3xl font-bold text-primary mb-1">
                        ${wood.currentPrice}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {wood.unit}
                      </div>
                      {wood.previousPrice !== wood.currentPrice && (
                        <div className="text-sm text-muted-foreground line-through">
                          Previously: ${wood.previousPrice}
                        </div>
                      )}
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      {wood.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Availability</span>
                          <span>{wood.availability}%</span>
                        </div>
                        <Progress value={wood.availability} className="h-2" />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Sustainability Score</span>
                        <Badge variant="secondary" className="text-green-600">
                          {wood.sustainabilityScore}/100
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Labor Rates */}
      <section className="section-padding bg-gradient-to-br from-muted/30 to-background">
        <div className="container-padding max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Hammer className="w-8 h-8 text-primary" />
              <h2 className="font-heading text-2xl lg:text-3xl">Labor Rates</h2>
            </div>
            <p className="text-muted-foreground max-w-3xl">
              Our skilled craftsmen bring decades of experience to every project. Rates reflect skill level and specialization.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {laborRates.map((labor, index) => (
              <motion.div
                key={labor.skill}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-xl mb-1">{labor.skill}</h3>
                        <p className="text-sm text-muted-foreground">
                          {labor.experience} experience
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">
                          ${labor.rate}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {labor.unit}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {labor.specialties.map((specialty) => (
                          <Badge key={specialty} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Calculator */}
      <section className="section-padding">
        <div className="container-padding max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <DollarSign className="w-8 h-8 text-primary" />
                  <h3 className="font-heading text-2xl lg:text-3xl">
                    Custom Quote Calculator
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Get an instant estimate for your custom furniture project. Our calculator uses current wood and labor prices to provide accurate pricing.
                </p>
                
                <div className="grid sm:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold">Instant Quotes</div>
                    <div className="text-sm text-muted-foreground">Real-time pricing</div>
                  </div>
                  <div className="text-center">
                    <TreePine className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold">Wood Selection</div>
                    <div className="text-sm text-muted-foreground">Choose your material</div>
                  </div>
                  <div className="text-center">
                    <Hammer className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold">Craft Level</div>
                    <div className="text-sm text-muted-foreground">Select complexity</div>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-wood px-8 py-4 text-lg font-semibold rounded-lg"
                >
                  <span className="flex items-center">
                    Start Your Quote
                    <DollarSign className="ml-2 w-5 h-5" />
                  </span>
                </motion.button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}