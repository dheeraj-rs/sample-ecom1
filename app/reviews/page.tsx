'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  ThumbsUp, 
  MessageSquare, 
  Filter,
  Search,
  Calendar,
  User,
  CheckCircle
} from 'lucide-react';
import Image from 'next/image';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const reviews = [
  {
    id: 1,
    customer: {
      name: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      verified: true,
      location: 'Charlotte, NC'
    },
    product: {
      name: 'Heritage Oak Dining Table',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg'
    },
    rating: 5,
    title: 'Absolutely Stunning Craftsmanship',
    content: 'This dining table exceeded all my expectations. The attention to detail is remarkable, and you can see the love and expertise that went into every joint and curve. The oak grain is beautiful, and the finish is flawless. It\'s been the centerpiece of our dining room for 6 months now, and it still looks brand new. Worth every penny!',
    date: '2024-01-15',
    helpful: 24,
    images: [
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
      'https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg'
    ],
    response: {
      author: 'Robert Kingsley',
      content: 'Thank you so much for your kind words, Sarah! It brings us great joy to know that your dining table has become such a cherished part of your home. We take pride in every piece we create.',
      date: '2024-01-16'
    }
  },
  {
    id: 2,
    customer: {
      name: 'Michael Chen',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
      verified: true,
      location: 'Raleigh, NC'
    },
    product: {
      name: 'Walnut Executive Desk',
      image: 'https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg'
    },
    rating: 5,
    title: 'Perfect for My Home Office',
    content: 'I work from home and needed a desk that was both functional and beautiful. This walnut desk is perfect. The drawers slide smoothly, there\'s plenty of workspace, and the wood grain is gorgeous. The delivery team was professional and set it up perfectly. Highly recommend!',
    date: '2024-01-10',
    helpful: 18,
    images: [],
    response: null
  },
  {
    id: 3,
    customer: {
      name: 'Emily Rodriguez',
      avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg',
      verified: true,
      location: 'Asheville, NC'
    },
    product: {
      name: 'Cherry Wood Bookshelf',
      image: 'https://images.pexels.com/photos/2092058/pexels-photo-2092058.jpeg'
    },
    rating: 5,
    title: 'Beautiful Addition to Our Living Room',
    content: 'We\'ve had this bookshelf for over a year now, and it still looks amazing. The cherry wood has developed a beautiful patina, and the construction is solid. It holds all our books without any sagging. Great investment piece!',
    date: '2024-01-05',
    helpful: 15,
    images: [
      'https://images.pexels.com/photos/2092058/pexels-photo-2092058.jpeg'
    ],
    response: {
      author: 'Sarah Mitchell',
      content: 'Thank you for sharing your experience, Emily! Cherry wood does develop such a beautiful character over time. We\'re thrilled it\'s serving you well.',
      date: '2024-01-06'
    }
  },
  {
    id: 4,
    customer: {
      name: 'David Thompson',
      avatar: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
      verified: true,
      location: 'Durham, NC'
    },
    product: {
      name: 'Mahogany Bed Frame',
      image: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg'
    },
    rating: 4,
    title: 'High Quality, Worth the Wait',
    content: 'The bed frame is beautifully made and very sturdy. The mahogany is gorgeous. Only reason for 4 stars instead of 5 is that it took a bit longer than expected to arrive, but the quality makes up for it. Would definitely order from Royalwood again.',
    date: '2023-12-28',
    helpful: 12,
    images: [],
    response: {
      author: 'Robert Kingsley',
      content: 'Thank you for your patience, David. We always prioritize quality over speed, and we\'re glad you\'re happy with the final result. We\'re working to improve our delivery timelines.',
      date: '2023-12-29'
    }
  },
  {
    id: 5,
    customer: {
      name: 'Jennifer Walsh',
      avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg',
      verified: true,
      location: 'Greensboro, NC'
    },
    product: {
      name: 'Pine Coffee Table',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg'
    },
    rating: 5,
    title: 'Rustic Beauty',
    content: 'This coffee table has such character! The pine has beautiful knots and grain patterns. It fits perfectly with our farmhouse decor. The finish is smooth and the construction is solid. Love supporting local craftsmen!',
    date: '2023-12-20',
    helpful: 9,
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg'
    ],
    response: null
  }
];

const stats = {
  totalReviews: 2847,
  averageRating: 4.9,
  distribution: {
    5: 2456,
    4: 312,
    3: 58,
    2: 15,
    1: 6
  }
};

export default function ReviewsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [filterRating, setFilterRating] = useState('all');

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-muted-foreground/30'
        }`}
      />
    ));
  };

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
              Customer Reviews
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              See what our customers say about their Royalwood furniture experience. Every review helps us continue crafting exceptional pieces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Review Stats */}
      <section className="section-padding">
        <div className="container-padding max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="mb-12">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Overall Rating */}
                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                      <div className="text-6xl font-bold text-primary">
                        {stats.averageRating}
                      </div>
                      <div>
                        <div className="flex items-center gap-1 mb-2">
                          {renderStars(5)}
                        </div>
                        <div className="text-muted-foreground">
                          Based on {stats.totalReviews.toLocaleString()} reviews
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Rating Distribution */}
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => {
                      const count = stats.distribution[rating as keyof typeof stats.distribution];
                      const percentage = (count / stats.totalReviews) * 100;
                      
                      return (
                        <div key={rating} className="flex items-center gap-3">
                          <div className="flex items-center gap-1 w-16">
                            <span className="text-sm">{rating}</span>
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          </div>
                          <div className="flex-1 bg-muted rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full transition-all duration-500"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                          <div className="text-sm text-muted-foreground w-12 text-right">
                            {count}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="pb-8">
        <div className="container-padding max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-between"
          >
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search reviews..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Select value={filterRating} onValueChange={setFilterRating}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter by rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Ratings</SelectItem>
                  <SelectItem value="5">5 Stars</SelectItem>
                  <SelectItem value="4">4 Stars</SelectItem>
                  <SelectItem value="3">3 Stars</SelectItem>
                  <SelectItem value="2">2 Stars</SelectItem>
                  <SelectItem value="1">1 Star</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="highest">Highest Rated</SelectItem>
                  <SelectItem value="lowest">Lowest Rated</SelectItem>
                  <SelectItem value="helpful">Most Helpful</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews List */}
      <section className="pb-16">
        <div className="container-padding max-w-6xl mx-auto">
          <div className="space-y-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-8">
                    <div className="flex gap-6">
                      {/* Product Image */}
                      <div className="relative w-24 h-24 shrink-0 rounded-lg overflow-hidden">
                        <Image
                          src={review.product.image}
                          alt={review.product.name}
                          fill
                          className="object-cover"
                          sizes="96px"
                        />
                      </div>
                      
                      {/* Review Content */}
                      <div className="flex-1">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <Avatar className="w-10 h-10">
                                <AvatarImage src={review.customer.avatar} />
                                <AvatarFallback>
                                  {review.customer.name.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="font-semibold">{review.customer.name}</span>
                                  {review.customer.verified && (
                                    <CheckCircle className="w-4 h-4 text-green-600" />
                                  )}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  {review.customer.location}
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-2 mb-2">
                              <div className="flex items-center gap-1">
                                {renderStars(review.rating)}
                              </div>
                              <span className="text-sm text-muted-foreground">
                                for {review.product.name}
                              </span>
                            </div>
                          </div>
                          
                          <div className="text-sm text-muted-foreground">
                            {new Date(review.date).toLocaleDateString()}
                          </div>
                        </div>
                        
                        {/* Review Title */}
                        <h3 className="font-semibold text-lg mb-3">
                          {review.title}
                        </h3>
                        
                        {/* Review Content */}
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {review.content}
                        </p>
                        
                        {/* Review Images */}
                        {review.images.length > 0 && (
                          <div className="flex gap-3 mb-4">
                            {review.images.map((image, i) => (
                              <div key={i} className="relative w-20 h-20 rounded-lg overflow-hidden">
                                <Image
                                  src={image}
                                  alt={`Review image ${i + 1}`}
                                  fill
                                  className="object-cover"
                                  sizes="80px"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {/* Actions */}
                        <div className="flex items-center gap-4 mb-4">
                          <Button variant="ghost" size="sm" className="text-muted-foreground">
                            <ThumbsUp className="w-4 h-4 mr-2" />
                            Helpful ({review.helpful})
                          </Button>
                          <Button variant="ghost" size="sm" className="text-muted-foreground">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Reply
                          </Button>
                        </div>
                        
                        {/* Company Response */}
                        {review.response && (
                          <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="secondary">Response from {review.response.author}</Badge>
                              <span className="text-sm text-muted-foreground">
                                {new Date(review.response.date).toLocaleDateString()}
                              </span>
                            </div>
                            <p className="text-sm leading-relaxed">
                              {review.response.content}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {/* Load More */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button size="lg" variant="outline">
              Load More Reviews
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}