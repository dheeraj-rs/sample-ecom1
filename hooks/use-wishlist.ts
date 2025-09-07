'use client';

import { useState, useEffect } from 'react';
import { toast } from 'sonner';

interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

export function useWishlist() {
  const [items, setItems] = useState<WishlistItem[]>([]);

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem('royalwood-wishlist');
    if (savedWishlist) {
      try {
        setItems(JSON.parse(savedWishlist));
      } catch (error) {
        console.error('Error loading wishlist from localStorage:', error);
      }
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('royalwood-wishlist', JSON.stringify(items));
  }, [items]);

  const addItem = (item: WishlistItem) => {
    setItems(prev => {
      const exists = prev.find(existingItem => existingItem.id === item.id);
      if (exists) {
        toast.info(`${item.name} is already in your wishlist`);
        return prev;
      }
      
      toast.success(`${item.name} added to wishlist`);
      return [...prev, item];
    });
  };

  const removeItem = (id: string) => {
    setItems(prev => {
      const item = prev.find(item => item.id === id);
      if (item) {
        toast.success(`${item.name} removed from wishlist`);
      }
      return prev.filter(item => item.id !== id);
    });
  };

  const isInWishlist = (id: string) => {
    return items.some(item => item.id === id);
  };

  const clearWishlist = () => {
    setItems([]);
    toast.success('Wishlist cleared');
  };

  return {
    items,
    addItem,
    removeItem,
    isInWishlist,
    clearWishlist,
    itemCount: items.length
  };
}