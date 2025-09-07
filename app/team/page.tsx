'use client';

import { motion } from 'framer-motion';
import { 
  Award, 
  Calendar, 
  MapPin, 
  Mail,
  Phone,
  Star,
  Hammer,
  TreePine,
  Palette
} from 'lucide-react';
import Image from 'next/image';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const owner = {
  name: 'Robert Kingsley',
  role: 'Founder & Master Craftsman',
  image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
  experience: '40+ years',
  founded: '1984',
  bio: 'Robert founded Royalwood in 1984 with a simple vision: create furniture that lasts generations. Starting in a small workshop behind his home, he has built Royalwood into one of the most respected furniture makers in the Southeast. His passion for traditional woodworking techniques and sustainable practices has shaped every aspect of the company.',
  specialties: ['Traditional Joinery', 'Wood Selection', 'Business Leadership', 'Sustainable Practices'],
  achievements: [
    'Founded Royalwood Furniture in 1984',
    'Master Craftsman Certification',
    'FSC Sustainability Champion Award',
    'Featured in Fine Woodworking Magazine',
    'Mentored over 50 apprentice craftsmen'
  ],
  contact: {
    email: 'robert@royalwood.com',
    phone: '(555) 123-4567'
  }
};

const team = [
  {
    name: 'Sarah Mitchell',
    role: 'Head of Design',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
    experience: '15 years',
    joinedYear: '2015',
    bio: 'Sarah brings modern design sensibilities to traditional craftsmanship. With a background in interior design and furniture making, she creates pieces that are both timeless and contemporary.',
    specialties: ['Modern Design', 'Space Planning', 'Custom Solutions', 'Client Consultation'],
    icon: Palette,
    contact: {
      email: 'sarah@royalwood.com'
    }
  },
  {
    name: 'Marcus Thompson',
    role: 'Lead Craftsman',
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
    experience: '22 years',
    joinedYear: '2008',
    bio: 'A third-generation woodworker, Marcus specializes in complex joinery and restoration of antique pieces. His attention to detail and traditional techniques are unmatched.',
    specialties: ['Complex Joinery', 'Restoration', 'Hand Carving', 'Apprentice Training'],
    icon: Hammer,
    contact: {
      email: 'marcus@royalwood.com'
    }
  },
  {
    name: 'Elena Rodriguez',
    role: 'Sustainability Director',
    image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg',
    experience: '12 years',
    joinedYear: '2018',
    bio: 'Elena ensures all our wood sources are sustainable and oversees our zero-waste workshop initiatives. Her expertise in forestry and environmental science guides our sourcing decisions.',
    specialties: ['Sustainable Sourcing', 'Environmental Impact', 'Waste Reduction', 'FSC Certification'],
    icon: TreePine,
    contact: {
      email: 'elena@royalwood.com'
    }
  },
  {
    name: 'James Wilson',
    role: 'Senior Craftsman',
    image: 'https://images.pexels.com/photos/1043472/pexels-photo-1043472.jpeg',
    experience: '18 years',
    joinedYear: '2010',
    bio: 'James specializes in fine finishing and has developed many of our signature stain and finish techniques. His work ensures every piece has a flawless, durable finish.',
    specialties: ['Fine Finishing', 'Stain Development', 'Quality Control', 'Technique Innovation'],
    icon: Award,
    contact: {
      email: 'james@royalwood.com'
    }
  },
  {
    name: 'Lisa Chen',
    role: 'Workshop Manager',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg',
    experience: '14 years',
    joinedYear: '2016',
    bio: 'Lisa oversees daily workshop operations and ensures projects stay on schedule while maintaining our high quality standards. Her organizational skills keep our complex custom orders running smoothly.',
    specialties: ['Project Management', 'Quality Assurance', 'Team Coordination', 'Process Optimization'],
    icon: Calendar,
    contact: {
      email: 'lisa@royalwood.com'
    }
  },
  {
    name: 'David Park',
    role: 'Apprentice Craftsman',
    image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg',
    experience: '3 years',
    joinedYear: '2021',
    bio: 'David is our newest team member, learning traditional techniques while bringing fresh perspectives to our craft. He represents the next generation of Royalwood craftsmen.',
    specialties: ['Traditional Techniques', 'Modern Tools', 'Learning & Development', 'Innovation'],
    icon: Star,
    contact: {
      email: 'david@royalwood.com'
    }
  }
];

export default function TeamPage() {
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
              Meet Our Master Craftsmen
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              The passionate artisans and designers who bring your furniture dreams to life with decades of combined experience and unwavering dedication to quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="section-padding">
        <div className="container-padding max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Owner Image */}
                <div className="relative aspect-[4/3] lg:aspect-auto">
                  <Image
                    src={owner.image}
                    alt={owner.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden" />
                </div>
                
                {/* Owner Details */}
                <CardContent className="p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      Founder
                    </Badge>
                    <Badge variant="outline">
                      Since {owner.founded}
                    </Badge>
                  </div>
                  
                  <h2 className="font-heading text-3xl lg:text-4xl mb-2">
                    {owner.name}
                  </h2>
                  <p className="text-xl text-primary font-medium mb-6">
                    {owner.role}
                  </p>
                  
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {owner.bio}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold mb-3">Specialties</h4>
                      <div className="space-y-2">
                        {owner.specialties.map((specialty) => (
                          <div key={specialty} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            <span className="text-sm">{specialty}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Key Achievements</h4>
                      <div className="space-y-2">
                        {owner.achievements.slice(0, 3).map((achievement) => (
                          <div key={achievement} className="flex items-center gap-2">
                            <Award className="w-4 h-4 text-primary shrink-0" />
                            <span className="text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="outline" className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      {owner.contact.email}
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      {owner.contact.phone}
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding bg-gradient-to-br from-muted/30 to-background">
        <div className="container-padding max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-2xl lg:text-3xl mb-4">
              Our Skilled Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each team member brings unique skills and passion to create exceptional furniture.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full group hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <member.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-xs">
                        {member.experience}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Since {member.joinedYear}
                      </Badge>
                    </div>
                    
                    <h3 className="font-heading text-xl mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {member.bio}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-sm mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.specialties.map((specialty) => (
                          <Badge key={specialty} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="w-full">
                      <Mail className="w-4 h-4 mr-2" />
                      {member.contact.email}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Stats */}
      <section className="section-padding">
        <div className="container-padding max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-heading text-2xl lg:text-3xl mb-12">
              Our Workshop by the Numbers
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: '6', label: 'Master Craftsmen', description: 'Skilled artisans with decades of experience' },
                { value: '180+', label: 'Years Combined', description: 'Total experience across our team' },
                { value: '50+', label: 'Apprentices Trained', description: 'Next generation craftsmen mentored' },
                { value: '15', label: 'Avg. Team Tenure', description: 'Years our team members stay with us' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="font-semibold mb-2">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}