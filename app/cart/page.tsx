'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Minus, 
  Plus, 
  Trash2, 
  ShoppingBag, 
  ArrowLeft,
  Heart,
  Gift,
  Truck,
  Shield
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/hooks/use-cart';
import { formatCurrency } from '@/lib/utils';

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal, itemCount } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [isPromoApplied, setIsPromoApplied] = useState(false);

  const shipping = subtotal > 2000 ? 0 : 150;
  const tax = subtotal * 0.08;
  const discount = isPromoApplied ? subtotal * 0.1 : 0;
  const total = subtotal + shipping + tax - discount;

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'welcome10') {
      setIsPromoApplied(true);
    }
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
                <ShoppingBag className="w-16 h-16 text-muted-foreground" />
              </div>
              
              <h1 className="font-heading text-3xl lg:text-4xl mb-4">Your Cart is Empty</h1>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Discover our beautiful handcrafted furniture collection and find the perfect pieces for your home.
              </p>
              
              <Button size="lg" className="btn-wood" asChild>
                <Link href="/products">
                  <span className="flex items-center">
                    Continue Shopping
                    <ArrowLeft className="ml-2 w-5 h-5" />
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
            <div className="flex items-center gap-4 mb-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="/products">
                  <ArrowLeft className="w-5 h-5" />
                </Link>
              </Button>
              <h1 className="font-heading text-3xl lg:text-4xl">Shopping Cart</h1>
            </div>
            <p className="text-muted-foreground">
              {itemCount} {itemCount === 1 ? 'item' : 'items'} in your cart
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-padding max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex gap-6">
                          {/* Product Image */}
                          <div className="relative w-32 h-32 shrink-0">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover rounded-lg"
                              sizes="128px"
                            />
                          </div>
                          
                          {/* Product Details */}
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                  <span>Wood: Oak</span>
                                  <span>Finish: Natural</span>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="font-bold text-xl text-primary">
                                  {formatCurrency(item.price)}
                                </div>
                              </div>
                            </div>
                            
                            {/* Quantity Controls */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="w-8 h-8"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                  <Minus className="w-4 h-4" />
                                </Button>
                                <span className="w-12 text-center font-medium">
                                  {item.quantity}
                                </span>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="w-8 h-8"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  <Plus className="w-4 h-4" />
                                </Button>
                              </div>
                              
                              <div className="flex items-center gap-2">
                                <Button variant="ghost" size="icon">
                                  <Heart className="w-4 h-4" />
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  size="icon"
                                  onClick={() => removeItem(item.id)}
                                  className="text-destructive hover:text-destructive"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="sticky top-24"
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl mb-6">Order Summary</h3>
                    
                    {/* Promo Code */}
                    <div className="mb-6">
                      <div className="flex gap-2">
                        <Input
                          placeholder="Promo code"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                        />
                        <Button 
                          variant="outline"
                          onClick={applyPromoCode}
                          disabled={isPromoApplied}
                        >
                          Apply
                        </Button>
                      </div>
                      {isPromoApplied && (
                        <div className="mt-2">
                          <Badge variant="secondary" className="text-green-600">
                            <Gift className="w-3 h-3 mr-1" />
                            10% discount applied
                          </Badge>
                        </div>
                      )}
                    </div>
                    
                    <Separator className="mb-6" />
                    
                    {/* Price Breakdown */}
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>{formatCurrency(subtotal)}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="flex items-center gap-2">
                          Shipping
                          {shipping === 0 && (
                            <Badge variant="secondary" className="text-xs">Free</Badge>
                          )}
                        </span>
                        <span>{formatCurrency(shipping)}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span>Tax</span>
                        <span>{formatCurrency(tax)}</span>
                      </div>
                      
                      {discount > 0 && (
                        <div className="flex justify-between text-green-600">
                          <span>Discount</span>
                          <span>-{formatCurrency(discount)}</span>
                        </div>
                      )}
                    </div>
                    
                    <Separator className="mb-6" />
                    
                    <div className="flex justify-between text-lg font-bold mb-6">
                      <span>Total</span>
                      <span className="text-primary">{formatCurrency(total)}</span>
                    </div>
                    
                    {/* Trust Badges */}
                    <div className="grid grid-cols-2 gap-4 mb-6 text-xs text-center">
                      <div className="flex flex-col items-center gap-1">
                        <Truck className="w-5 h-5 text-primary" />
                        <span>Free Shipping</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <Shield className="w-5 h-5 text-primary" />
                        <span>Secure Payment</span>
                      </div>
                    </div>
                    
                    <Button size="lg" className="w-full btn-wood mb-4" asChild>
                      <Link href="/checkout">
                        <span className="flex items-center justify-center">
                          Proceed to Checkout
                        </span>
                      </Link>
                    </Button>
                    
                    <Button variant="outline" size="lg" className="w-full" asChild>
                      <Link href="/products">
                        <span className="flex items-center justify-center">
                          Continue Shopping
                        </span>
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}