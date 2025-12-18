'use client';

import { useState } from 'react';
import { CookingMethod } from '@/lib/types';
import { EditorialCard } from './EditorialCard';

interface MethodsFilterProps {
  methods: CookingMethod[];
}

export function MethodsFilter({ methods }: MethodsFilterProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter methods based on search query
  const filteredMethods = methods.filter((method) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      method.name.toLowerCase().includes(searchLower) ||
      method.description.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="w-full">
      {/* Search Bar */}
      <div className="mb-12 max-w-2xl mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="חפש שיטת הכנה..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-4 rounded-full border border-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 focus:outline-none bg-white/80 backdrop-blur text-slate-900 placeholder:text-slate-400 transition-all shadow-sm"
            dir="rtl"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Results Count */}
      {searchQuery && (
        <div className="text-center mb-8 text-slate-500 font-medium">
          נמצאו {filteredMethods.length} שיטות
        </div>
      )}

      {/* Methods Grid */}
      {filteredMethods.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-8">
          {filteredMethods.map((method) => {
            // Prioritize the method-specific hero image, then fall back to recipe images or a default
            const methodImage = method.image || method.recipes[0]?.images?.[0] || method.recipes[0]?.image || '/images/methods/chef-preparing-fish.png';
            
            return (
              <EditorialCard
                key={method.id}
                title={method.name}
                subtitle={method.description}
                image={methodImage}
                href={`/methods/${method.slug}`}
                meta={`${method.recipes.length} מתכונים`}
              />
            );
          })}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-2xl text-slate-400 mb-4 font-light">לא נמצאו תוצאות</p>
          <p className="text-slate-500">נסה לחפש במילים אחרות</p>
        </div>
      )}
    </div>
  );
}
