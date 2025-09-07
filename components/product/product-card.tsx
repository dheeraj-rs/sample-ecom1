'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Star, 
  Heart, 
  ShoppingCart, 
  Eye,
  Timer,
  TreePine
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/hooks/use-cart';
import { useWishlist } from '@/hooks/use-wishlist';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    rating: number;
    reviews: number;
    tag?: string;
    woodType?: string;
    craftsmanHours?: number;
  };
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const { addItem } = useCart();
  const { addItem: addToWishlist, isInWishlist } = useWishlist();
  
  const isOnSale = product.originalPrice && product.originalPrice > product.price;
  const discountPercentage = isOnSale 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  };

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addToWishlist({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("group", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="product-card h-full">
        <div className="relative aspect-[4/3] overflow-hidden">
          {/* Product Image */}
          <Link href={`/products/${product.id}`}>
            <div className="relative w-full h-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className={cn(
                  "object-cover transition-all duration-700 group-hover:scale-110",
                  isImageLoaded ? "opacity-100" : "opacity-0"
                )}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                onLoad={() => setIsImageLoaded(true)}
              />
              {!isImageLoaded && (
                <div className="absolute inset-0 loading-shimmer" />
              )}
            </div>
          </Link>
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.tag && (
              <Badge 
                variant={product.tag === 'Sale' ? 'destructive' : 'secondary'}
                className="shadow-sm font-medium"
              >
                {product.tag}
              </Badge>
            )}
            {isOnSale && (
              <Badge variant="destructive" className="shadow-sm">
                -{discountPercentage}%
              </Badge>
            )}
          </div>
          
          {/* Quick Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: isHovered ? 1 : 0, 
              y: isHovered ? 0 : 10 
            }}
            transition={{ duration: 0.2 }}
            className="absolute top-3 right-3 flex flex-col gap-2"
          >
            <Button
              size="icon"
              variant="secondary"
              className="w-8 h-8 bg-white/90 hover:bg-white backdrop-blur-sm shadow-sm"
              onClick={handleAddToWishlist}
            >
              <Heart 
                className={cn(
                  "w-4 h-4 transition-colors", 
                  isInWishlist(product.id) 
                    ? "fill-red-500 text-red-500" 
                    : "text-muted-foreground"
                )} 
              />
            </Button>
            
            <Button
              size="icon"
              variant="secondary"
              className="w-8 h-8 bg-white/90 hover:bg-white backdrop-blur-sm shadow-sm"
              asChild
            >
              <Link href={`/products/${product.id}`}>
                <Eye className="w-4 h-4 text-muted-foreground" />
              </Link>
            </Button>
          </motion.div>
          
          {/* Quick Add to Cart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isHovered ? 1 : 0, 
              y: isHovered ? 0 : 20 
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="absolute bottom-3 left-3 right-3"
          >
            <Button
              onClick={handleAddToCart}
              className="w-full btn-wood shadow-lg group/btn"
              size="sm"
            >
              <ShoppingCart className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
              Add to Cart
            </Button>
          </motion.div>
        </div>
        
        <CardContent className="p-6">
          <Link href={`/products/${product.id}`}>
            {/* Product Name */}
            <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
              {product.name}
            </h3>
            
            {/* Rating & Reviews */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-4 h-4",
                      i < Math.floor(product.rating)
                        ? "text-yellow-400 fill-current"
                        : "text-muted-foreground/30"
                    )}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-xs text-muted-foreground">
                ({product.reviews} reviews)
              </span>
            </div>
            
            {/* Product Details */}
            {(product.woodType || product.craftsmanHours) && (
              <div className="flex items-center gap-4 mb-3 text-xs text-muted-foreground">
                {product.woodType && (
                  <div className="flex items-center gap-1">
                    <TreePine className="w-3 h-3" />
                    <span>{product.woodType}</span>
                  </div>
                )}
                {product.craftsmanHours && (
                  <div className="flex items-center gap-1">
                    <Timer className="w-3 h-3" />
                    <span>{product.craftsmanHours}h craft time</span>
                  </div>
                )}
              </div>
            )}
            
            {/* Price */}
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-primary">
                ${product.price.toLocaleString()}
              </span>
              {isOnSale && (
                <span className="text-lg text-muted-foreground line-through">
                  ${product.originalPrice!.toLocaleString()}
                </span>
              )}
            </div>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}