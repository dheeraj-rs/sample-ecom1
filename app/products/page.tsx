'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  ChevronDown,
  Star,
  Heart,
  ShoppingCart,
  SlidersHorizontal
} from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ProductCard } from '@/components/product/product-card';
import { ProductFilters } from '@/components/product/product-filters';
import { ProductSort } from '@/components/product/product-sort';
import { cn } from '@/lib/utils';

const products = [
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
    craftsmanHours: 45,
    category: 'dining-room'
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
    craftsmanHours: 32,
    category: 'living-room'
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
    craftsmanHours: 60,
    category: 'bedroom'
  },
  {
    id: '4',
    name: 'Craftsman Cherry Desk',
    price: 1950,
    image: 'https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg',
    rating: 4.7,
    reviews: 156,
    woodType: 'American Cherry',
    craftsmanHours: 38,
    category: 'office'
  },
  {
    id: '5',
    name: 'Rustic Pine Coffee Table',
    price: 850,
    originalPrice: 1200,
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    rating: 4.6,
    reviews: 94,
    tag: 'Sale',
    woodType: 'Eastern Pine',
    craftsmanHours: 24,
    category: 'living-room'
  },
  {
    id: '6',
    name: 'Elegant Maple Dresser',
    price: 2200,
    image: 'https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg',
    rating: 4.8,
    reviews: 112,
    woodType: 'Hard Maple',
    craftsmanHours: 42,
    category: 'bedroom'
  }
];

const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'living-room', name: 'Living Room', count: products.filter(p => p.category === 'living-room').length },
  { id: 'dining-room', name: 'Dining Room', count: products.filter(p => p.category === 'dining-room').length },
  { id: 'bedroom', name: 'Bedroom', count: products.filter(p => p.category === 'bedroom').length },
  { id: 'office', name: 'Office', count: products.filter(p => p.category === 'office').length }
];

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API call delay
    const timer = setTimeout(() => {
      let filtered = products;

      // Filter by category
      if (selectedCategory !== 'all') {
        filtered = filtered.filter(product => product.category === selectedCategory);
      }

      // Filter by search query
      if (searchQuery) {
        filtered = filtered.filter(product =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.woodType.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      // Sort products
      switch (sortBy) {
        case 'price-low':
          filtered.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          filtered.sort((a, b) => b.price - a.price);
          break;
        case 'rating':
          filtered.sort((a, b) => b.rating - a.rating);
          break;
        case 'newest':
          filtered.sort((a, b) => (b.tag === 'New' ? 1 : 0) - (a.tag === 'New' ? 1 : 0));
          break;
        default:
          // Featured - keep original order
          break;
      }

      setFilteredProducts(filtered);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.h1 
              className="font-heading text-responsive-2xl mb-6 text-balance"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Furniture Collection
            </motion.h1>
            <motion.p 
              className="text-responsive-base text-muted-foreground max-w-3xl mx-auto text-pretty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover handcrafted furniture pieces made with sustainable materials and traditional techniques. Each piece is unique and built to last generations.
            </motion.p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20"
          >
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search furniture..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-3 bg-background/50 border-border/50 focus:bg-background focus:border-primary/20"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={cn(
                      'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                      selectedCategory === category.id
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'bg-background/50 text-muted-foreground hover:bg-primary/10 hover:text-primary'
                    )}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category.name} ({category.count})
                  </motion.button>
                ))}
              </div>

              {/* View Controls */}
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setShowFilters(!showFilters)}
                  className={cn(
                    'transition-colors',
                    showFilters && 'bg-primary text-primary-foreground'
                  )}
                >
                  <SlidersHorizontal className="w-4 h-4" />
                </Button>

                <div className="flex bg-background/50 rounded-lg p-1">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="px-3"
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="px-3"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding">
        <div className="container-padding max-w-8xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, x: -300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.3 }}
                  className="lg:w-80 shrink-0"
                >
                  <ProductFilters />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main Content */}
            <div className="flex-1">
              {/* Sort and Results Count */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8"
              >
                <div className="text-muted-foreground">
                  Showing {filteredProducts.length} of {products.length} products
                  {selectedCategory !== 'all' && (
                    <Badge variant="secondary" className="ml-2">
                      {categories.find(c => c.id === selectedCategory)?.name}
                    </Badge>
                  )}
                </div>

                <ProductSort value={sortBy} onChange={setSortBy} />
              </motion.div>

              {/* Products Grid/List */}
              <AnimatePresence mode="wait">
                {isLoading ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                  >
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="loading-skeleton h-96 rounded-2xl" />
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="products"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className={cn(
                      viewMode === 'grid'
                        ? 'responsive-grid gap-8'
                        : 'space-y-6'
                    )}
                  >
                    {filteredProducts.map((product, index) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: index * 0.1,
                          type: 'spring',
                          stiffness: 100
                        }}
                        whileHover={{ 
                          y: -5,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <ProductCard 
                          product={product} 
                          className={viewMode === 'list' ? 'flex-row' : ''}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* No Results */}
              {!isLoading && filteredProducts.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-center py-16"
                >
                  <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <h3 className="font-heading text-2xl mb-4">No products found</h3>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    We couldn't find any products matching your search criteria. Try adjusting your filters or search terms.
                  </p>
                  <Button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                    }}
                    className="btn-wood"
                  >
                    Clear Filters
                  </Button>
                </motion.div>
              )}

              {/* Load More Button */}
              {!isLoading && filteredProducts.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-center mt-12"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 py-4 hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Load More Products
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}