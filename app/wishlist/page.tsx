'use client';

import { motion } from 'framer-motion';
import { Heart, ShoppingCart, X, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useWishlist } from '@/hooks/use-wishlist';
import { useCart } from '@/hooks/use-cart';
import { formatCurrency } from '@/lib/utils';

export default function WishlistPage() {
  const { items, removeItem, clearWishlist } = useWishlist();
  const { addItem } = useCart();

  const handleAddToCart = (item: any) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1
    });
  };

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        
        <section className="section-padding">
          <div className="container-padding max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center mx-auto mb-8">
                <Heart className="w-16 h-16 text-muted-foreground" />
              </div>
              
              <h1 className="font-heading text-3xl lg:text-4xl mb-4">Your Wishlist is Empty</h1>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Save your favorite furniture pieces to your wishlist and never lose track of items you love.
              </p>
              
              <Button size="lg" className="btn-wood" asChild>
                <Link href="/products">
                  <span className="flex items-center">
                    Discover Furniture
                    <Heart className="ml-2 w-5 h-5" />
                  </span>
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
        
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container-padding max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" asChild>
                  <Link href="/products">
                    <ArrowLeft className="w-5 h-5" />
                  </Link>
                </Button>
                <div>
                  <h1 className="font-heading text-3xl lg:text-4xl">My Wishlist</h1>
                  <p className="text-muted-foreground">
                    {items.length} {items.length === 1 ? 'item' : 'items'} saved
                  </p>
                </div>
              </div>
              
              {items.length > 0 && (
                <Button variant="outline" onClick={clearWishlist}>
                  Clear All
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-padding max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    
                    <Button
                      size="icon"
                      variant="secondary"
                      className="absolute top-3 right-3 w-8 h-8 bg-white/90 hover:bg-white"
                      onClick={() => removeItem(item.id)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                      {item.name}
                    </h3>
                    
                    <div className="text-2xl font-bold text-primary mb-4">
                      {formatCurrency(item.price)}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="flex-1 btn-wood"
                        onClick={() => handleAddToCart(item)}
                      >
                        <span className="flex items-center justify-center">
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Add to Cart
                        </span>
                      </Button>
                    </div>
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