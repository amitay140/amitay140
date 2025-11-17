'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CookingMethod } from '@/lib/types';

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
    <div>
      {/* Search Bar */}
      <div className="mb-8 max-w-2xl mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="חפש שיטת הכנה..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-lg bg-white text-gray-900 placeholder:text-gray-400"
            dir="rtl"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Results Count */}
      {searchQuery && (
        <div className="text-center mb-6 text-gray-600">
          נמצאו {filteredMethods.length} שיטות
        </div>
      )}

      {/* Methods Grid */}
      {filteredMethods.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredMethods.map((method) => (
            <Link
              key={method.id}
              href={`/methods/${method.slug}`}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 text-center group"
            >
              {/* Icon */}
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                {method.icon}
              </div>

              {/* Method Name */}
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                {method.name}
              </h2>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-4">
                {method.description}
              </p>

              {/* Recipe Count */}
              <div className="text-sm text-blue-600 font-semibold">
                {method.recipes.length} מתכונים ←
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500 mb-2">לא נמצאו תוצאות</p>
          <p className="text-gray-400">נסה לחפש במילים אחרות</p>
        </div>
      )}
    </div>
  );
}
