'use client';

import { useState, useMemo } from 'react';
import { Recipe } from '@/lib/types';
import { RecipeCard } from './RecipeCard';

interface RecipesFilterProps {
  recipes: Recipe[];
}

export function RecipesFilter({ recipes }: RecipesFilterProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  const [fishTypeFilter, setFishTypeFilter] = useState<string>('all');
  const [timeFilter, setTimeFilter] = useState<string>('all');

  // Extract unique fish types from recipes
  const fishTypes = useMemo(() => {
    const types = new Set<string>();
    recipes.forEach(recipe => {
      if (recipe.fishType) types.add(recipe.fishType);
    });
    return Array.from(types).sort();
  }, [recipes]);

  // Filter recipes based on all criteria
  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      // Search filter
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = !searchQuery ||
        recipe.title.toLowerCase().includes(searchLower) ||
        recipe.description.toLowerCase().includes(searchLower) ||
        (recipe.fishType && recipe.fishType.toLowerCase().includes(searchLower)) ||
        (recipe.ingredients && recipe.ingredients.some(ing => ing.toLowerCase().includes(searchLower)));

      // Difficulty filter
      const matchesDifficulty = difficultyFilter === 'all' || recipe.difficulty === difficultyFilter;

      // Fish type filter
      const matchesFishType = fishTypeFilter === 'all' || recipe.fishType === fishTypeFilter;

      // Time filter
      const totalTime = recipe.prepTime + recipe.cookTime;
      let matchesTime = true;
      if (timeFilter === 'quick') matchesTime = totalTime < 20;
      else if (timeFilter === 'medium') matchesTime = totalTime >= 20 && totalTime <= 40;
      else if (timeFilter === 'long') matchesTime = totalTime > 40;

      return matchesSearch && matchesDifficulty && matchesFishType && matchesTime;
    });
  }, [recipes, searchQuery, difficultyFilter, fishTypeFilter, timeFilter]);

  // Check if any filters are active
  const hasActiveFilters = difficultyFilter !== 'all' || fishTypeFilter !== 'all' || timeFilter !== 'all' || searchQuery !== '';

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery('');
    setDifficultyFilter('all');
    setFishTypeFilter('all');
    setTimeFilter('all');
  };

  return (
    <div>
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="חפש מתכון..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none bg-white text-gray-900 placeholder:text-gray-400"
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

      {/* Filter Dropdowns */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {/* Difficulty Filter */}
        <select
          value={difficultyFilter}
          onChange={(e) => setDifficultyFilter(e.target.value)}
          className="px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none cursor-pointer bg-white text-gray-900"
          dir="rtl"
        >
          <option value="all">כל הרמות</option>
          <option value="קל">קל</option>
          <option value="בינוני">בינוני</option>
          <option value="מתקדם">מתקדם</option>
        </select>

        {/* Fish Type Filter */}
        <select
          value={fishTypeFilter}
          onChange={(e) => setFishTypeFilter(e.target.value)}
          className="px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none cursor-pointer bg-white text-gray-900"
          dir="rtl"
        >
          <option value="all">כל סוגי הדגים</option>
          {fishTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>

        {/* Time Filter */}
        <select
          value={timeFilter}
          onChange={(e) => setTimeFilter(e.target.value)}
          className="px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none cursor-pointer bg-white text-gray-900"
          dir="rtl"
        >
          <option value="all">כל זמני ההכנה</option>
          <option value="quick">מהיר (עד 20 דק׳)</option>
          <option value="medium">בינוני (20-40 דק׳)</option>
          <option value="long">ארוך (מעל 40 דק׳)</option>
        </select>

        {/* Reset Button */}
        {hasActiveFilters && (
          <button
            onClick={resetFilters}
            className="px-4 py-2 rounded-lg border-2 border-gray-200 bg-white text-gray-900 hover:bg-gray-50 hover:border-blue-500 transition-colors font-semibold"
          >
            איפוס
          </button>
        )}
      </div>

      {/* Results Count */}
      {hasActiveFilters && (
        <div className="text-center mb-6 text-gray-600">
          נמצאו {filteredRecipes.length} מתכונים
        </div>
      )}

      {/* Recipes Grid */}
      {filteredRecipes.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <p className="text-xl text-gray-500 mb-2">לא נמצאו מתכונים</p>
          <p className="text-gray-400 mb-4">נסה לשנות את הסינון</p>
          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              איפוס סינון
            </button>
          )}
        </div>
      )}
    </div>
  );
}
