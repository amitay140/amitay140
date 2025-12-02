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
    <div className="w-full">
      {/* Search Bar */}
      <div className="mb-8 max-w-2xl mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="חפש מתכון..."
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

      {/* Filter Dropdowns */}
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        {/* Difficulty Filter */}
        <div className="relative">
            <select
              value={difficultyFilter}
              onChange={(e) => setDifficultyFilter(e.target.value)}
              className="appearance-none px-6 py-3 pr-10 rounded-full border border-slate-300 focus:border-slate-900 focus:outline-none cursor-pointer bg-white/80 backdrop-blur text-slate-900 font-medium min-w-[140px]"
              dir="rtl"
            >
              <option value="all">כל הרמות</option>
              <option value="קל">קל</option>
              <option value="בינוני">בינוני</option>
              <option value="מתקדם">מתקדם</option>
            </select>
             <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-4 text-slate-500">
                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
        </div>


        {/* Fish Type Filter */}
        <div className="relative">
            <select
              value={fishTypeFilter}
              onChange={(e) => setFishTypeFilter(e.target.value)}
              className="appearance-none px-6 py-3 pr-10 rounded-full border border-slate-300 focus:border-slate-900 focus:outline-none cursor-pointer bg-white/80 backdrop-blur text-slate-900 font-medium min-w-[160px]"
              dir="rtl"
            >
              <option value="all">כל סוגי הדגים</option>
              {fishTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-4 text-slate-500">
                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
        </div>

        {/* Time Filter */}
        <div className="relative">
            <select
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
              className="appearance-none px-6 py-3 pr-10 rounded-full border border-slate-300 focus:border-slate-900 focus:outline-none cursor-pointer bg-white/80 backdrop-blur text-slate-900 font-medium min-w-[180px]"
              dir="rtl"
            >
              <option value="all">כל זמני ההכנה</option>
              <option value="quick">מהיר (עד 20 דק׳)</option>
              <option value="medium">בינוני (20-40 דק׳)</option>
              <option value="long">ארוך (מעל 40 דק׳)</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-4 text-slate-500">
                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
        </div>

        {/* Reset Button */}
        {hasActiveFilters && (
          <button
            onClick={resetFilters}
            className="px-6 py-3 rounded-full border border-slate-300 bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors font-semibold"
          >
            איפוס
          </button>
        )}
      </div>

      {/* Results Count */}
      {hasActiveFilters && (
        <div className="text-center mb-8 text-slate-500 font-medium">
          נמצאו {filteredRecipes.length} מתכונים
        </div>
      )}

      {/* Recipes Grid */}
      {filteredRecipes.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-2xl text-slate-400 mb-4 font-light">לא נמצאו מתכונים</p>
          <p className="text-slate-500 mb-6">נסה לשנות את הטיבול</p>
          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="text-slate-900 border-b border-slate-900 pb-1 hover:border-slate-600 transition-colors font-medium"
            >
              איפוס סינון
            </button>
          )}
        </div>
      )}
    </div>
  );
}
