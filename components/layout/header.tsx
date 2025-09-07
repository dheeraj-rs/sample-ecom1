'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  ShoppingBag,
  Heart,
  User,
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/hooks/use-cart';
import { useAuth } from '@/hooks/use-auth';
import { cn } from '@/lib/utils';

const navigation = [
  {
    name: 'Living Room',
    href: '/products/category/living-room',
    submenu: [
      { name: 'Sofas & Sectionals', href: '/products/category/sofas' },
      { name: 'Coffee Tables', href: '/products/category/coffee-tables' },
      { name: 'TV Stands', href: '/products/category/tv-stands' },
      { name: 'Bookcases', href: '/products/category/bookcases' }
    ]
  },
  {
    name: 'Dining Room',
    href: '/products/category/dining-room',
    submenu: [
      { name: 'Dining Tables', href: '/products/category/dining-tables' },
      { name: 'Dining Chairs', href: '/products/category/dining-chairs' },
      { name: 'Buffets & Sideboards', href: '/products/category/buffets' },
      { name: 'Bar Stools', href: '/products/category/bar-stools' }
    ]
  },
  {
    name: 'Bedroom',
    href: '/products/category/bedroom',
    submenu: [
      { name: 'Bed Frames', href: '/products/category/bed-frames' },
      { name: 'Dressers', href: '/products/category/dressers' },
      { name: 'Nightstands', href: '/products/category/nightstands' },
      { name: 'Wardrobes', href: '/products/category/wardrobes' }
    ]
  },
  {
    name: 'Office',
    href: '/products/category/office',
    submenu: [
      { name: 'Desks', href: '/products/category/desks' },
      { name: 'Office Chairs', href: '/products/category/office-chairs' },
      { name: 'File Cabinets', href: '/products/category/file-cabinets' },
      { name: 'Bookcases', href: '/products/category/office-bookcases' }
    ]
  },
  {
    name: 'Custom',
    href: '/custom'
  },
  {
    name: 'About',
    href: '/about'
  }
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const { items, itemCount } = useCart();
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground text-sm py-2 relative z-50">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="hidden sm:flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@royalwood.com</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-center w-full sm:w-auto">
              <span className="font-medium">✨ Free shipping on orders over $2,000</span>
            </div>

            <div className="hidden sm:block text-right">
              <span>40 Years of Craftsmanship</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          'sticky top-0 z-40 w-full transition-all duration-300',
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-lg'
            : 'bg-background'
        )}
      >
        <div className="container-padding mx-auto">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
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

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center pl-8 space-x-8">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium"
                  >
                    {item.name}
                    {item.submenu && (
                      <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.submenu && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-xl py-2 z-50"
                      >
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Search Bar - Desktop */}
            <div className="hidden md:block flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search furniture..."
                  className="w-full pl-10 pr-4 py-2 bg-muted/50 border border-transparent rounded-lg 
                           focus:bg-background focus:border-primary/20 focus:ring-2 focus:ring-primary/10 
                           transition-all outline-none"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              {/* Search Toggle - Mobile */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search className="w-5 h-5" />
              </Button>

              {/* Wishlist */}
              <Button variant="ghost" size="icon" asChild>
                <Link href="/wishlist">
                  <Heart className="w-5 h-5" />
                  <span className="sr-only">Wishlist</span>
                </Link>
              </Button>

              {/* Shopping Cart */}
              <Button variant="ghost" size="icon" className="relative" asChild>
                <Link href="/cart">
                  <ShoppingBag className="w-5 h-5" />
                  {itemCount > 0 && (
                    <Badge
                      variant="destructive"
                      className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center text-xs p-0 min-w-0"
                    >
                      {itemCount}
                    </Badge>
                  )}
                  <span className="sr-only">Shopping cart</span>
                </Link>
              </Button>

              {/* User Account */}
              <Button variant="ghost" size="icon" asChild>
                <Link href={isAuthenticated ? "/account" : "/auth/login"}>
                  <User className="w-5 h-5" />
                  <span className="sr-only">Account</span>
                </Link>
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <AnimatePresence>
            {isSearchOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden border-t border-border pt-4 pb-4"
              >
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="search"
                    placeholder="Search furniture..."
                    className="w-full pl-10 pr-4 py-3 bg-muted/50 border border-transparent rounded-lg 
                             focus:bg-background focus:border-primary/20 focus:ring-2 focus:ring-primary/10 
                             transition-all outline-none"
                    autoFocus
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="h-full w-80 bg-background shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-amber-800 rounded-md flex items-center justify-center">
                    <span className="font-bold text-white text-sm">R</span>
                  </div>
                  <div>
                    <div className="font-heading text-lg font-bold">Royalwood</div>
                    <div className="text-xs text-muted-foreground">Since 1984</div>
                  </div>
                </div>
              </div>

              <nav className="p-6 space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="block py-2 text-lg font-medium hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              <div className="absolute bottom-6 left-6 right-6 pt-6 border-t border-border">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <span>hello@royalwood.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}