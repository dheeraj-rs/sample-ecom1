'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Star, Shield, Truck } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function InteractiveHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setMousePosition({ x, y });
      mouseX.set(x);
      mouseY.set(y);
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, [mouseX, mouseY]);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden cursor-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-accent rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: mouseXSpring,
          y: mouseYSpring,
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          opacity: isHovered ? 0.8 : 0.6,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Interactive Background Elements */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: mousePosition.x * 0.01 * (i % 10),
              y: mousePosition.y * 0.01 * (i % 10),
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              x: { duration: 2, ease: 'easeOut' },
              y: { duration: 2, ease: 'easeOut' },
              opacity: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 container-padding text-center text-white max-w-6xl mx-auto"
        style={{
          x: useSpring(mousePosition.x * 0.02, springConfig),
          y: useSpring(mousePosition.y * 0.02, springConfig),
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
          >
            <Badge variant="secondary" className="mb-8 text-lg font-medium bg-white/20 backdrop-blur-sm border-white/30 px-6 py-2">
              ✨ Handcrafted Since 1984
            </Badge>
          </motion.div>

          <motion.h1
            className="font-heading text-4xl sm:text-6xl lg:text-8xl mb-8 text-balance leading-tight"
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
            className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto text-pretty leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Transform your space with heirloom-quality furniture crafted by master artisans using sustainable hardwoods and time-honored techniques.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="btn-wood text-lg px-10 py-6 group relative overflow-hidden"
                asChild
              >
                <Link href="/products">
                  <motion.span
                    className="relative z-10 flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    Explore Collection
                    <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </motion.span>
                </Link>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-10 py-6 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm btn-interactive"
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
            {[
              { icon: Star, text: '4.9/5 from 2,400+ reviews' },
              { icon: Shield, text: 'Lifetime warranty' },
              { icon: Truck, text: 'Free white-glove delivery' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2"
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <item.icon className="w-5 h-5 fill-current text-yellow-400" />
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-20 h-20 bg-accent/20 rounded-full blur-xl"
        animate={{
          x: mousePosition.x * 0.05,
          y: mousePosition.y * 0.05,
          scale: [1, 1.2, 1],
        }}
        transition={{
          scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
        }}
      />

      <motion.div
        className="absolute bottom-20 right-20 w-32 h-32 bg-primary/20 rounded-full blur-xl"
        animate={{
          x: mousePosition.x * -0.03,
          y: mousePosition.y * -0.03,
          scale: [1, 0.8, 1],
        }}
        transition={{
          scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
        }}
      />
    </div>
  );
}