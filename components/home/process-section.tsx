'use client';

import { motion } from 'framer-motion';
import { TreePine, Compass, Hammer, Truck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const processSteps = [
  {
    icon: TreePine,
    step: '01',
    title: 'Sustainable Sourcing',
    description: 'We carefully select premium hardwoods from FSC-certified forests, ensuring each piece of timber meets our exacting standards for grain, durability, and sustainability.',
    image: 'https://images.pexels.com/photos/1268076/pexels-photo-1268076.jpeg'
  },
  {
    icon: Compass,
    step: '02',
    title: 'Design & Planning',
    description: 'Our master craftsmen create detailed blueprints, carefully considering wood grain patterns, joinery techniques, and your space requirements for the perfect fit.',
    image: 'https://images.pexels.com/photos/5691616/pexels-photo-5691616.jpeg'
  },
  {
    icon: Hammer,
    step: '03',
    title: 'Master Craftsmanship',
    description: 'Using time-honored techniques passed down through generations, our artisans hand-craft each piece with precision, passion, and attention to every detail.',
    image: 'https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg'
  },
  {
    icon: Truck,
    step: '04',
    title: 'White Glove Delivery',
    description: 'Your heirloom furniture is carefully delivered and professionally installed in your home, ensuring it arrives in perfect condition and ready to enjoy.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg'
  }
];

export function ProcessSection() {
  return (
    <section className="section-padding">
      <div className="container-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl mb-4 text-balance">
            From Forest to Your Home
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Every piece of Royalwood furniture follows a meticulous journey of craftsmanship, 
            from sustainably sourced timber to heirloom-quality furniture in your home.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="grid md:grid-cols-2 h-full">
                  {/* Content */}
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-6xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors">
                        {step.step}
                      </div>
                    </div>
                    
                    <h3 className="font-heading text-xl lg:text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                  
                  {/* Image */}
                  <div className="relative aspect-square md:aspect-auto overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl"
        >
          <h3 className="font-heading text-2xl lg:text-3xl font-semibold mb-4">
            Ready to Start Your Custom Project?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our craftsmen are ready to create something extraordinary for your space. 
            Schedule a consultation to discuss your vision and requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-wood px-8 py-3 rounded-lg font-semibold text-white"
            >
              Schedule Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg font-semibold transition-colors"
            >
              View Portfolio
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}