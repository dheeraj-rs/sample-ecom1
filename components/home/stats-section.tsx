'use client';

import { motion } from 'framer-motion';
import { TreePine, Hammer, Award, Recycle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  {
    icon: TreePine,
    value: '10,000+',
    label: 'Trees Sustainably Sourced',
    description: 'Every tree is FSC certified and replanted'
  },
  {
    icon: Hammer,
    value: '50,000+',
    label: 'Pieces Handcrafted',
    description: 'Each one unique and built to last generations'
  },
  {
    icon: Award,
    value: '40',
    label: 'Years of Excellence',
    description: 'Four decades of master craftsmanship'
  },
  {
    icon: Recycle,
    value: '100%',
    label: 'Zero Waste Workshop',
    description: 'All scraps become art pieces or compost'
  }
];

export function StatsSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-muted/30 to-background">
      <div className="container-padding max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl mb-4 text-balance">
            Craftsmanship by Numbers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Four decades of dedication to sustainable forestry, traditional craftsmanship, and environmental responsibility.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="text-4xl lg:text-5xl font-bold text-primary mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  
                  <h3 className="font-semibold text-lg mb-3">{stat.label}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}