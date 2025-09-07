'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Star, Shield, Truck, Award, ChevronDown, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ProductCard } from '@/components/product/product-card';
import { TestimonialCarousel } from '@/components/home/testimonial-carousel';
import { StatsSection } from '@/components/home/stats-section';
import { ProcessSection } from '@/components/home/process-section';
import { InteractiveHero } from '@/components/home/interactive-hero';
import { VideoBackground } from '@/components/ui/video-background';
import { ParallaxSection } from '@/components/ui/parallax-section';
import { AnimatedCounter } from '@/components/ui/animated-counter';

const featuredProducts = [
  {
    id: '1',
    name: 'Heritage Oak Dining Table',
    price: 2850,
    originalPrice: 3200,
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
    rating: 4.9,
    reviews: 127,
    tag: 'Bestseller',
    woodType: 'White Oak',
    craftsmanHours: 45
  },
  {
    id: '2',
    name: 'Artisan Walnut Bookshelf',
    price: 1650,
    image: 'https://images.pexels.com/photos/2092058/pexels-photo-2092058.jpeg',
    rating: 4.8,
    reviews: 89,
    tag: 'New',
    woodType: 'Black Walnut',
    craftsmanHours: 32
  },
  {
    id: '3',
    name: 'Royal Mahogany Bed Frame',
    price: 3200,
    originalPrice: 3600,
    image: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg',
    rating: 5.0,
    reviews: 203,
    tag: 'Premium',
    woodType: 'Honduran Mahogany',
    craftsmanHours: 60
  },
  {
    id: '4',
    name: 'Craftsman Cherry Desk',
    price: 1950,
    image: 'https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg',
    rating: 4.7,
    reviews: 156,
    woodType: 'American Cherry',
    craftsmanHours: 38
  }
];

const categories = [
  {
    name: 'Living Room',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    count: '120+ pieces',
    href: '/products/category/living-room',
    description: 'Elegant seating and tables for your living space'
  },
  {
    name: 'Dining Room',
    image: 'https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg',
    count: '85+ pieces',
    href: '/products/category/dining-room',
    description: 'Beautiful dining sets for memorable meals'
  },
  {
    name: 'Bedroom',
    image: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg',
    count: '95+ pieces',
    href: '/products/category/bedroom',
    description: 'Comfortable and stylish bedroom furniture'
  },
  {
    name: 'Office',
    image: 'https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg',
    count: '65+ pieces',
    href: '/products/category/office',
    description: 'Professional workspace solutions'
  }
];

const trustFeatures = [
  {
    icon: Shield,
    title: '40 Years of Mastery',
    description: 'Four decades of woodworking expertise passed down through generations',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Award,
    title: 'Certified Sustainable',
    description: 'FSC certified wood sources and eco-friendly finishing processes',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Truck,
    title: 'White Glove Delivery',
    description: 'Professional setup and installation service included nationwide',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Star,
    title: 'Lifetime Craftsmanship',
    description: 'Comprehensive warranty covering materials and workmanship',
    color: 'from-amber-500 to-amber-600'
  }
];

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  const heroY = useTransform(scrollY, [0, 500], [0, -150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 1.1]);

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xPct = (clientX - innerWidth / 2) / innerWidth;
      const yPct = (clientY - innerHeight / 2) / innerHeight;
      x.set(xPct * 20);
      y.set(yPct * 20);
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="relative h-[85vh] w-full flex items-center justify-center">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
            alt="Handcrafted wooden furniture showcase"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent" />
        </motion.div>

        {/* Floating particles
        <div className="absolute inset-0 particles-bg">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-accent/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div> */}

        <motion.div
          style={{
            y: heroY,
            opacity: heroOpacity,
            scale: heroScale,
            x,
            y: y
          }}
          className="relative z-10 container-padding text-center text-white max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 100 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
            >
              <Badge variant="secondary" className="mb-8 text-lg font-medium bg-white/20 backdrop-blur-sm border-white/30 px-6 py-2">
                ✨ Handcrafted Since 1984
              </Badge>
            </motion.div>

            <motion.h1
              className="font-heading text-responsive-3xl mb-8 text-balance leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              Where Wood
              <motion.span
                className="block text-gradient bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                style={{ backgroundSize: '200% 200%' }}
              >
                Meets Wonder
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-responsive-base text-white/90 mb-12 max-w-3xl mx-auto text-pretty leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              Transform your space with heirloom-quality furniture crafted by master artisans using sustainable hardwoods and time-honored techniques. Each piece tells a story of passion, precision, and environmental responsibility.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="btn-wood text-lg px-10 py-6 group relative overflow-hidden font-semibold"
                  asChild
                >
                  <Link href="/products">
                    <span className="relative z-10 flex items-center">
                      Explore Collection
                      <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-10 py-6 border-white/30 text-white/90 hover:text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm btn-interactive bg-transparent"
                  asChild
                >
                  <Link href="/about">
                    Our Story
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center items-center gap-8 text-sm text-white/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
              >
                <Star className="w-5 h-5 fill-current text-yellow-400" />
                <span>4.9/5 from 2,400+ reviews</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
              >
                <Shield className="w-5 h-5" />
                <span>Lifetime warranty</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
              >
                <Truck className="w-5 h-5" />
                <span>Free white-glove delivery</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-white/60 hover:text-white/80 cursor-pointer transition-colors"
            whileHover={{ scale: 1.2 }}
          >
            <ChevronDown className="w-10 h-10" />
          </motion.div>
        </motion.div>
      </section>

      {/* Trust Features with Enhanced Animations */}
      <ParallaxSection className="section-padding bg-gradient-to-br from-muted/30 via-background to-muted/50">
        <div className="container-padding max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2
              className="font-heading text-responsive-2xl mb-6 text-balance"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Why Choose Royalwood?
            </motion.h2>
            <motion.p
              className="text-responsive-base text-muted-foreground max-w-3xl mx-auto text-pretty"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Four decades of expertise, sustainable practices, and uncompromising quality in every piece.
            </motion.p>
          </motion.div>

          <div className="responsive-grid gap-8">
            {trustFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: 'spring',
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="interactive-card h-full text-center group">
                  <CardContent className="p-8 relative overflow-hidden">
                    <motion.div
                      className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${feature.color} rounded-3xl mb-8 shadow-lg`}
                      whileHover={{
                        scale: 1.1,
                        rotate: 360,
                        transition: { duration: 0.6 }
                      }}
                    >
                      <feature.icon className="w-10 h-10 text-white" />
                    </motion.div>

                    <motion.h3
                      className="font-semibold text-xl mb-4 group-hover:text-primary transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      {feature.title}
                    </motion.h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Decorative elements */}
                    <motion.div
                      className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Featured Products with Advanced Animations */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

        <div className="container-padding max-w-8xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2
              className="font-heading text-responsive-2xl mb-6 text-balance"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Featured Masterpieces
            </motion.h2>
            <motion.p
              className="text-responsive-base text-muted-foreground max-w-3xl mx-auto text-pretty"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Each piece tells a story of craftsmanship, sustainability, and timeless design.
            </motion.p>
          </motion.div>

          <div className="responsive-grid gap-8 mb-16">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 60, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  type: 'spring',
                  stiffness: 80
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -15,
                  rotateX: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="btn-wood group text-lg px-10 py-6"
                asChild
              >
                <Link href="/products">
                  <motion.span
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    View All Products
                    <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </motion.span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories with Interactive Hover Effects */}
      <ParallaxSection className="section-padding bg-gradient-to-br from-muted/20 via-background to-muted/30">
        <div className="container-padding max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2
              className="font-heading text-responsive-2xl mb-6 text-balance"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Shop by Room
            </motion.h2>
            <motion.p
              className="text-responsive-base text-muted-foreground max-w-3xl mx-auto text-pretty"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Find the perfect pieces for every space in your home.
            </motion.p>
          </motion.div>

          <div className="responsive-grid gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <Link href={category.href} className="group block">
                  <Card className="interactive-card h-96 relative overflow-hidden">
                    <div className="absolute inset-0">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Image
                          src={category.image}
                          alt={category.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    </div>

                    <CardContent className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <motion.h3
                        className="font-heading text-2xl lg:text-3xl mb-2 group-hover:text-accent transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        {category.name}
                      </motion.h3>
                      <motion.p
                        className="text-white/80 text-sm mb-2"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {category.count}
                      </motion.p>
                      <motion.p
                        className="text-white/70 text-sm"
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {category.description}
                      </motion.p>
                    </CardContent>

                    {/* Hover overlay effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Process Section */}
      <ProcessSection />

      {/* Stats Section with Animated Counters */}
      <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 40% 40%, rgba(120, 200, 255, 0.3) 0%, transparent 50%)',
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
          />
        </div>

        <div className="container-padding max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2
              className="font-heading text-responsive-2xl mb-6 text-balance"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Craftsmanship by Numbers
            </motion.h2>
            <motion.p
              className="text-responsive-base text-muted-foreground max-w-3xl mx-auto text-pretty"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Four decades of dedication to sustainable forestry, traditional craftsmanship, and environmental responsibility.
            </motion.p>
          </motion.div>

          <div className="responsive-grid gap-8">
            {[
              { value: 10000, suffix: '+', label: 'Trees Sustainably Sourced', description: 'Every tree is FSC certified and replanted' },
              { value: 50000, suffix: '+', label: 'Pieces Handcrafted', description: 'Each one unique and built to last generations' },
              { value: 40, suffix: '', label: 'Years of Excellence', description: 'Four decades of master craftsmanship' },
              { value: 100, suffix: '%', label: 'Zero Waste Workshop', description: 'All scraps become art pieces or compost' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: 'spring',
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="interactive-card h-full text-center group">
                  <CardContent className="p-8">
                    <motion.div
                      className="text-5xl lg:text-6xl font-bold text-primary mb-4"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.2 + 0.5,
                        type: 'spring',
                        stiffness: 200
                      }}
                      viewport={{ once: true }}
                    >
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                        duration={2000}
                        delay={index * 200}
                      />
                    </motion.div>

                    <motion.h3
                      className="font-semibold text-xl mb-4 group-hover:text-primary transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      {stat.label}
                    </motion.h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {stat.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* Newsletter CTA with Video Background */}
      <section className="section-padding relative overflow-hidden">
        <VideoBackground
          src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
          poster="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
          overlay="bg-gradient-to-br from-primary/80 via-primary/70 to-primary/80"
        />

        <div className="container-padding max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="font-heading text-responsive-2xl mb-8 text-balance text-primary-foreground"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Stay Connected
            </motion.h2>

            <motion.p
              className="text-responsive-base mb-12 text-primary-foreground/90 max-w-3xl mx-auto text-pretty"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Be the first to know about new collections, exclusive offers, and behind-the-scenes craftsmanship stories.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 
                          placeholder:text-primary-foreground/60 text-primary-foreground text-lg
                          focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/20 transition-all"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-medium px-8 py-4 text-lg btn-interactive"
                >
                  Subscribe
                </Button>
              </motion.div>
            </motion.div>

            <motion.p
              className="text-sm text-primary-foreground/70"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              No spam, just beautiful furniture updates. Unsubscribe anytime.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}