'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Interior Designer',
    location: 'Charlotte, NC',
    rating: 5,
    content: 'The craftsmanship is absolutely stunning. Every detail shows the passion and skill of the artisans. Our clients always comment on the beautiful grain patterns and perfect finish.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
    product: 'Custom Walnut Dining Set'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Architect',
    location: 'Raleigh, NC',
    rating: 5,
    content: 'Royalwood delivers exactly what they promise. The sustainable sourcing and traditional techniques create pieces that will last generations. Exceptional quality and service.',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
    product: 'Office Built-ins'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Homeowner',
    location: 'Asheville, NC',
    rating: 5,
    content: "We've had our oak bookshelf for 3 years now, and it still looks brand new. The wood has developed such a beautiful patina. Worth every penny for the quality and durability.",
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg',
    product: 'Heritage Oak Bookshelf'
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Collector',
    location: 'Durham, NC',
    rating: 5,
    content: 'The attention to detail is remarkable. You can see the love and expertise that goes into every joint, every curve. These aren\'t just furniture pieces - they\'re works of art.',
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
    product: 'Mahogany Executive Desk'
  },
  {
    id: 5,
    name: 'Jennifer Walsh',
    role: 'Restaurant Owner',
    location: 'Greensboro, NC',
    rating: 5,
    content: 'Royalwood furnished our entire restaurant with custom tables and chairs. Two years later, they still look incredible despite heavy daily use. Exceptional durability.',
    image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg',
    product: 'Commercial Dining Furniture'
  }
];

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container-padding max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl mb-4 text-balance">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover why thousands of homeowners, designers, and architects trust Royalwood for their finest furniture.
          </p>
        </motion.div>

        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Testimonial Display */}
          <div className="relative h-96 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Card className="h-full">
                  <CardContent className="h-full p-8 lg:p-12 flex items-center">
                    <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
                      {/* Testimonial Content */}
                      <div className="space-y-6">
                        <div className="relative">
                          <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                          <blockquote className="text-lg lg:text-xl leading-relaxed text-muted-foreground pl-6">
                            "{testimonials[currentIndex].content}"
                          </blockquote>
                        </div>
                        
                        <div className="flex items-center mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                        
                        <div>
                          <div className="font-semibold text-lg">
                            {testimonials[currentIndex].name}
                          </div>
                          <div className="text-muted-foreground">
                            {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                          </div>
                          <div className="text-sm text-primary font-medium mt-1">
                            Purchase: {testimonials[currentIndex].product}
                          </div>
                        </div>
                      </div>
                      
                      {/* Client Image */}
                      <div className="relative">
                        <div className="relative w-full max-w-sm mx-auto">
                          <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                            <img
                              src={testimonials[currentIndex].image}
                              alt={testimonials[currentIndex].name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg">
                            <Quote className="w-8 h-8 text-primary-foreground" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={previousTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background z-10"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background z-10"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary w-8' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border"
        >
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">4.9</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">2,400+</div>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">40</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Would Recommend</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}