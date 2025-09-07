'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';

const filterCategories = [
  {
    id: 'wood-type',
    name: 'Wood Type',
    options: [
      { id: 'oak', name: 'Oak', count: 24 },
      { id: 'walnut', name: 'Walnut', count: 18 },
      { id: 'mahogany', name: 'Mahogany', count: 12 },
      { id: 'cherry', name: 'Cherry', count: 15 },
      { id: 'maple', name: 'Maple', count: 9 },
      { id: 'pine', name: 'Pine', count: 6 }
    ]
  },
  {
    id: 'style',
    name: 'Style',
    options: [
      { id: 'modern', name: 'Modern', count: 32 },
      { id: 'traditional', name: 'Traditional', count: 28 },
      { id: 'rustic', name: 'Rustic', count: 19 },
      { id: 'contemporary', name: 'Contemporary', count: 22 },
      { id: 'vintage', name: 'Vintage', count: 14 }
    ]
  },
  {
    id: 'finish',
    name: 'Finish',
    options: [
      { id: 'natural', name: 'Natural', count: 45 },
      { id: 'stained', name: 'Stained', count: 38 },
      { id: 'painted', name: 'Painted', count: 16 },
      { id: 'distressed', name: 'Distressed', count: 12 }
    ]
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { id: 'small', name: 'Small', count: 28 },
      { id: 'medium', name: 'Medium', count: 42 },
      { id: 'large', name: 'Large', count: 31 },
      { id: 'extra-large', name: 'Extra Large', count: 15 }
    ]
  }
];

export function ProductFilters() {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [openSections, setOpenSections] = useState<string[]>(['wood-type', 'style']);

  const handleFilterChange = (categoryId: string, optionId: string, checked: boolean) => {
    setSelectedFilters(prev => {
      const categoryFilters = prev[categoryId] || [];
      
      if (checked) {
        return {
          ...prev,
          [categoryId]: [...categoryFilters, optionId]
        };
      } else {
        return {
          ...prev,
          [categoryId]: categoryFilters.filter(id => id !== optionId)
        };
      }
    });
  };

  const removeFilter = (categoryId: string, optionId: string) => {
    handleFilterChange(categoryId, optionId, false);
  };

  const clearAllFilters = () => {
    setSelectedFilters({});
    setPriceRange([0, 5000]);
  };

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const getActiveFiltersCount = () => {
    return Object.values(selectedFilters).reduce((total, filters) => total + filters.length, 0);
  };

  return (
    <Card className="sticky top-24">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Filters</CardTitle>
          {getActiveFiltersCount() > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="text-muted-foreground hover:text-foreground"
            >
              Clear All
            </Button>
          )}
        </div>
        
        {/* Active Filters */}
        {getActiveFiltersCount() > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="flex flex-wrap gap-2 pt-4 border-t"
          >
            {Object.entries(selectedFilters).map(([categoryId, filters]) =>
              filters.map(filterId => {
                const category = filterCategories.find(c => c.id === categoryId);
                const option = category?.options.find(o => o.id === filterId);
                
                return (
                  <motion.div
                    key={`${categoryId}-${filterId}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Badge
                      variant="secondary"
                      className="pr-1 gap-1 hover:bg-destructive hover:text-destructive-foreground transition-colors cursor-pointer"
                      onClick={() => removeFilter(categoryId, filterId)}
                    >
                      {option?.name}
                      <X className="w-3 h-3" />
                    </Badge>
                  </motion.div>
                );
              })
            )}
          </motion.div>
        )}
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Price Range */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h4 className="font-medium mb-4">Price Range</h4>
          <div className="px-2">
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={5000}
              min={0}
              step={50}
              className="mb-4"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>${priceRange[0].toLocaleString()}</span>
              <span>${priceRange[1].toLocaleString()}</span>
            </div>
          </div>
        </motion.div>

        {/* Filter Categories */}
        {filterCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
          >
            <Collapsible
              open={openSections.includes(category.id)}
              onOpenChange={() => toggleSection(category.id)}
            >
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-between p-0 h-auto font-medium hover:bg-transparent"
                >
                  <span>{category.name}</span>
                  <motion.div
                    animate={{ rotate: openSections.includes(category.id) ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </Button>
              </CollapsibleTrigger>

              <CollapsibleContent className="space-y-3 pt-4">
                {category.options.map((option, optionIndex) => (
                  <motion.div
                    key={option.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: optionIndex * 0.05 }}
                    className="flex items-center space-x-3 group"
                  >
                    <Checkbox
                      id={`${category.id}-${option.id}`}
                      checked={selectedFilters[category.id]?.includes(option.id) || false}
                      onCheckedChange={(checked) =>
                        handleFilterChange(category.id, option.id, checked as boolean)
                      }
                      className="group-hover:border-primary transition-colors"
                    />
                    <label
                      htmlFor={`${category.id}-${option.id}`}
                      className="flex-1 text-sm cursor-pointer group-hover:text-primary transition-colors"
                    >
                      {option.name}
                    </label>
                    <span className="text-xs text-muted-foreground">
                      {option.count}
                    </span>
                  </motion.div>
                ))}
              </CollapsibleContent>
            </Collapsible>
          </motion.div>
        ))}

        {/* Rating Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <h4 className="font-medium mb-4">Customer Rating</h4>
          <div className="space-y-3">
            {[5, 4, 3, 2, 1].map((rating) => (
              <motion.div
                key={rating}
                className="flex items-center space-x-3 group cursor-pointer"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <Checkbox id={`rating-${rating}`} />
                <label
                  htmlFor={`rating-${rating}`}
                  className="flex items-center space-x-2 cursor-pointer group-hover:text-primary transition-colors"
                >
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={cn(
                          'text-sm',
                          i < rating ? 'text-yellow-400' : 'text-muted-foreground/30'
                        )}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-sm">& Up</span>
                </label>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Availability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <h4 className="font-medium mb-4">Availability</h4>
          <div className="space-y-3">
            {[
              { id: 'in-stock', name: 'In Stock', count: 89 },
              { id: 'pre-order', name: 'Pre-Order', count: 12 },
              { id: 'custom-order', name: 'Custom Order', count: 45 }
            ].map((option, index) => (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center space-x-3 group"
              >
                <Checkbox id={option.id} />
                <label
                  htmlFor={option.id}
                  className="flex-1 text-sm cursor-pointer group-hover:text-primary transition-colors"
                >
                  {option.name}
                </label>
                <span className="text-xs text-muted-foreground">
                  {option.count}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
}