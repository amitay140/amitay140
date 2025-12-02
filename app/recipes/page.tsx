import React from 'react';
import { getAllRecipes } from '@/lib/data/methods';
import { RecipesFilter } from '@/components/shared/RecipesFilter';
import { PageLayout } from '@/components/layouts/PageLayout';

export default function RecipesPage() {
  const allRecipes = getAllRecipes();

  // Fallback image for the main recipes page
  const heroImage = 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1920&q=80';

  return (
    <PageLayout>
      {/* Full Width Hero Section */}
      <div className="relative w-full h-[40vh] min-h-[300px] rounded-3xl overflow-hidden mb-12 shadow-2xl mx-auto max-w-[1920px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="כל המתכונים"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight shadow-sm">
            כל המתכונים
          </h1>
          <p className="text-xl text-slate-100 max-w-2xl mx-auto font-light leading-relaxed shadow-sm">
            חפשו, סננו ובשלו את הדגים הטובים ביותר מהים התיכון
          </p>
        </div>
      </div>

      {/* Filter & List Section */}
      <div className="container mx-auto px-4">
        <RecipesFilter recipes={allRecipes} />
      </div>
    </PageLayout>
  );
}
