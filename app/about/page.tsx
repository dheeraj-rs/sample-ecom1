'use client';

import { motion } from 'framer-motion';
import { Award, Users, TreePine, Heart, Clock, Shield } from 'lucide-react';
import Image from 'next/image';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { VideoBackground } from '@/components/ui/video-background';
import { ParallaxSection } from '@/components/ui/parallax-section';
import { AnimatedCounter } from '@/components/ui/animated-counter';

const milestones = [
  { year: '1984', title: 'Founded', description: 'Started as a small family workshop in Asheville, NC' },
  { year: '1992', title: 'First Showroom', description: 'Opened our first retail location downtown' },
  { year: '2001', title: 'Sustainable Certified', description: 'Became FSC certified for sustainable practices' },
  { year: '2010', title: 'Online Expansion', description: 'Launched e-commerce platform nationwide' },
  { year: '2018', title: 'Master Craftsman Program', description: 'Established apprenticeship program' },
  { year: '2024', title: '40 Years Strong', description: 'Celebrating four decades of excellence' }
];

const team = [
  {
    name: 'Robert Kingsley',
    role: 'Founder & Master Craftsman',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
    bio: 'With over 40 years of woodworking experience, Robert founded Royalwood with a vision to create heirloom-quality furniture using traditional techniques.',
    specialties: ['Traditional Joinery', 'Wood Selection', 'Finishing Techniques']
  },
  {
    name: 'Sarah Mitchell',
    role: 'Head of Design',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
    bio: 'Sarah brings modern design sensibilities to traditional craftsmanship, creating pieces that are both timeless and contemporary.',
    specialties: ['Modern Design', 'Space Planning', 'Custom Solutions']
  },
  {
    name: 'Marcus Thompson',
    role: 'Lead Craftsman',
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
    bio: 'A third-generation woodworker, Marcus specializes in complex joinery and restoration of antique pieces.',
    specialties: ['Complex Joinery', 'Restoration', 'Hand Carving']
  },
  {
    name: 'Elena Rodriguez',
    role: 'Sustainability Director',
    image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg',
    bio: 'Elena ensures all our wood sources are sustainable and oversees our zero-waste workshop initiatives.',
    specialties: ['Sustainable Sourcing', 'Environmental Impact', 'Waste Reduction']
  }
];

const values = [
  {
    icon: TreePine,
    title: 'Sustainability',
    description: 'We source only FSC-certified wood and maintain a zero-waste workshop, turning every scrap into art or compost.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Heart,
    title: 'Craftsmanship',
    description: 'Every piece is handcrafted with passion and precision, using techniques passed down through generations.',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We support local artisans and give back to our community through apprenticeship programs and workshops.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Shield,
    title: 'Quality',
    description: 'We stand behind every piece with a lifetime warranty, ensuring your furniture lasts for generations.',
    color: 'from-amber-500 to-amber-600'
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <VideoBackground
          src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
          poster="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
          overlay="bg-gradient-to-br from-black/60 via-black/40 to-black/60"
        />
        
        <div className="relative z-10 container-padding text-center text-white max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
            >
              <Badge variant="secondary" className="mb-8 text-lg font-medium bg-white/20 backdrop-blur-sm border-white/30 px-6 py-2">
                ✨ Since 1984
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="font-heading text-responsive-3xl mb-8 text-balance leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Four Decades of
              <span className="block text-gradient bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 bg-clip-text text-transparent">
                Masterful Craftsmanship
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-responsive-base text-white/90 mb-12 max-w-3xl mx-auto text-pretty leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              From a small family workshop to a renowned furniture maker, our story is one of passion, 
              dedication, and an unwavering commitment to creating pieces that last generations.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <ParallaxSection className="section-padding">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-responsive-2xl mb-8 text-balance">
                Our Story
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  In 1984, Robert Kingsley started Royalwood in a small workshop behind his home in Asheville, North Carolina. 
                  With just a few hand tools and an unwavering passion for woodworking, he began creating custom furniture 
                  pieces for neighbors and friends.
                </p>
                <p>
                  What started as a hobby quickly grew into something much larger. Word spread about the exceptional quality 
                  and attention to detail that went into every piece. By the early 1990s, demand had grown so much that 
                  Robert opened his first showroom downtown.
                </p>
                <p>
                  Today, four decades later, Royalwood has become synonymous with heirloom-quality furniture. We've stayed 
                  true to our roots while embracing sustainable practices and modern design sensibilities. Every piece 
                  still carries the same passion and craftsmanship that Robert put into his very first creation.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg"
                  alt="Robert Kingsley in his workshop"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">
                    <AnimatedCounter value={40} suffix="+" />
                  </div>
                  <div className="text-sm opacity-90">Years of Excellence</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </ParallaxSection>

      {/* Timeline */}
      <section className="section-padding bg-gradient-to-br from-muted/30 via-background to-muted/50">
        <div className="container-padding max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-responsive-2xl mb-6 text-balance">
              Our Journey
            </h2>
            <p className="text-responsive-base text-muted-foreground max-w-3xl mx-auto text-pretty">
              Key milestones that shaped Royalwood into the company we are today.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary rounded-full" />
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="interactive-card">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-primary mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="font-heading text-xl mb-3">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline Dot */}
                  <motion.div
                    className="w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg z-10"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  />
                  
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <ParallaxSection className="section-padding">
        <div className="container-padding max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-responsive-2xl mb-6 text-balance">
              Our Values
            </h2>
            <p className="text-responsive-base text-muted-foreground max-w-3xl mx-auto text-pretty">
              The principles that guide everything we do, from sourcing materials to delivering your finished piece.
            </p>
          </motion.div>

          <div className="responsive-grid gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
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
                  <CardContent className="p-8">
                    <motion.div 
                      className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${value.color} rounded-3xl mb-8 shadow-lg`}
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 360,
                        transition: { duration: 0.6 }
                      }}
                    >
                      <value.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    <h3 className="font-semibold text-xl mb-4 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Meet Our Team */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container-padding max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-responsive-2xl mb-6 text-balance">
              Meet Our Team
            </h2>
            <p className="text-responsive-base text-muted-foreground max-w-3xl mx-auto text-pretty">
              The passionate craftspeople and designers who bring your furniture dreams to life.
            </p>
          </motion.div>

          <div className="responsive-grid gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="interactive-card h-full overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {member.bio}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty) => (
                        <Badge key={specialty} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container-padding max-w-6xl mx-auto">
          <div className="responsive-grid gap-8">
            {[
              { value: 50000, suffix: '+', label: 'Pieces Crafted', description: 'Each one unique and built to last' },
              { value: 2400, suffix: '+', label: 'Happy Customers', description: 'Families we\'ve served nationwide' },
              { value: 15, suffix: '', label: 'Master Craftsmen', description: 'Skilled artisans on our team' },
              { value: 98, suffix: '%', label: 'Customer Satisfaction', description: 'Would recommend us to friends' }
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
                <Card className="interactive-card h-full text-center">
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
                    
                    <h3 className="font-semibold text-xl mb-3">{stat.label}</h3>
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

      <Footer />
    </main>
  );
}