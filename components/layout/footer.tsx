import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const footerLinks = {
  shop: [
    { name: 'Living Room', href: '/products/category/living-room' },
    { name: 'Dining Room', href: '/products/category/dining-room' },
    { name: 'Bedroom', href: '/products/category/bedroom' },
    { name: 'Office', href: '/products/category/office' },
    { name: 'Custom Furniture', href: '/custom' },
    { name: 'Sale Items', href: '/sale' }
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Craftsmen', href: '/craftsmen' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
    { name: 'Reviews', href: '/reviews' }
  ],
  service: [
    { name: 'Shipping & Delivery', href: '/shipping' },
    { name: 'Returns & Exchanges', href: '/returns' },
    { name: 'Care Instructions', href: '/care' },
    { name: 'Warranty', href: '/warranty' },
    { name: 'Contact Support', href: '/support' },
    { name: 'Installation', href: '/installation' }
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Accessibility', href: '/accessibility' },
    { name: 'Cookie Policy', href: '/cookies' }
  ]
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/royalwood' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/royalwood' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/royalwood' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/royalwood' }
];

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      {/* Newsletter Section */}
      <div className="container-padding max-w-6xl mx-auto py-16">
        <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="font-heading text-2xl lg:text-3xl font-bold mb-4 text-balance">
            Join the Royalwood Family
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Get exclusive access to new collections, craftsman stories, and special offers. 
            Plus, receive our free wood care guide when you subscribe.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-6">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background 
                       focus:ring-2 focus:ring-primary/20 focus:border-primary/20 outline-none transition-all"
            />
            <Button size="lg" className="btn-wood shrink-0">
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            No spam, just beautiful updates. Unsubscribe anytime.
          </p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-padding max-w-6xl mx-auto py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 group mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="font-bold text-white text-xl">R</span>
              </div>
              <div>
                <span className="font-heading text-2xl font-bold text-primary">
                  Royalwood
                </span>
                <div className="text-xs text-muted-foreground -mt-1">
                  Since 1984
                </div>
              </div>
            </Link>
            
            <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">
              For four decades, we've been crafting heirloom-quality furniture using sustainable hardwoods 
              and time-honored techniques. Each piece tells a story of masterful craftsmanship and environmental responsibility.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="text-sm">
                  <div className="font-medium">Workshop & Showroom</div>
                  <div className="text-muted-foreground">
                    1234 Craftsman Way<br />
                    Asheville, NC 28801
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div className="text-sm">
                  <div className="font-medium">(555) 123-4567</div>
                  <div className="text-muted-foreground text-xs">Mon-Fri 8AM-6PM EST</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <div className="text-sm">
                  <div className="font-medium">hello@royalwood.com</div>
                  <div className="text-muted-foreground text-xs">We reply within 24 hours</div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="outline"
                  size="icon"
                  className="hover:bg-primary hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <Link href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="w-4 h-4" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
          
          {/* Footer Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Customer Service</h4>
            <ul className="space-y-3">
              {footerLinks.service.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <Separator />
      
      {/* Bottom Footer */}
      <div className="container-padding max-w-6xl mx-auto py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <span>© 2024 Royalwood Furniture. All rights reserved.</span>
            </div>
            <div className="hidden md:block">|</div>
            <div className="flex items-center gap-4">
              {footerLinks.legal.map((link, index) => (
                <span key={link.name} className="flex items-center gap-4">
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                  {index < footerLinks.legal.length - 1 && (
                    <span className="text-muted-foreground/50">•</span>
                  )}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>in Asheville, NC</span>
          </div>
        </div>
      </div>
    </footer>
  );
}