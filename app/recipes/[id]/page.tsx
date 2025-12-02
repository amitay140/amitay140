import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getRecipeById, getAllRecipeIds, getMethodBySlug } from '@/lib/data/methods';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { RecipeCard } from '@/components/shared/RecipeCard';
import { RecipeImageGallery } from '@/components/shared/RecipeImageGallery';
import { IngredientsList } from '@/components/shared/IngredientsList';
import { PageLayout } from '@/components/layouts/PageLayout';
import { Clock, Flame, Fish, Gauge, ChefHat, ScrollText, Utensils } from 'lucide-react';

// Generate static params for all recipes
export function generateStaticParams() {
  return getAllRecipeIds().map((id) => ({
    id,
  }));
}

// Page component
export default async function RecipeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = getRecipeById(id);

  if (!recipe) {
    notFound();
  }

  // Get related recipes from the same method
  const method = getMethodBySlug(recipe.methodSlug);
  const relatedRecipes = method?.recipes.filter(r => r.id !== recipe.id).slice(0, 3) || [];

  return (
    <PageLayout>
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'שיטות הכנה', href: '/methods' },
            { label: recipe.methodName, href: `/methods/${recipe.methodSlug}` },
            { label: recipe.title }
          ]}
        />

        {/* Hero Image Gallery */}
        <RecipeImageGallery
          images={recipe.images || (recipe.image ? [recipe.image] : [])}
          recipeTitle={recipe.title}
        />

        {/* Header */}
        <div className="mb-8 mt-8">

          {/* Recipe Header */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            {/* Method Badge */}
            <Link
              href={`/methods/${recipe.methodSlug}`}
              className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 hover:bg-slate-200 transition-colors"
            >
              <Utensils className="w-4 h-4" />
              <span>{recipe.methodName}</span>
            </Link>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {recipe.title}
            </h1>

            {/* Description */}
            <p className="text-xl text-slate-600 mb-8 leading-relaxed font-light">
              {recipe.description}
            </p>

            {/* Meta Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-100">
              {recipe.fishType && (
                <div className="flex flex-col items-center text-center group">
                  <div className="p-3 bg-blue-50 rounded-full mb-3 group-hover:bg-blue-100 transition-colors">
                    <Fish className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-sm text-slate-500 mb-1 font-medium">סוג דג</div>
                  <div className="font-bold text-slate-900 text-lg">{recipe.fishType}</div>
                </div>
              )}

              <div className="flex flex-col items-center text-center group">
                <div className="p-3 bg-amber-50 rounded-full mb-3 group-hover:bg-amber-100 transition-colors">
                    <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <div className="text-sm text-slate-500 mb-1 font-medium">הכנה</div>
                <div className="font-bold text-slate-900 text-lg">{recipe.prepTime} דק׳</div>
              </div>

              <div className="flex flex-col items-center text-center group">
                 <div className="p-3 bg-orange-50 rounded-full mb-3 group-hover:bg-orange-100 transition-colors">
                    <Flame className="w-6 h-6 text-orange-600" />
                </div>
                <div className="text-sm text-slate-500 mb-1 font-medium">בישול</div>
                <div className="font-bold text-slate-900 text-lg">{recipe.cookTime} דק׳</div>
              </div>

              <div className="flex flex-col items-center text-center group">
                <div className="p-3 bg-slate-50 rounded-full mb-3 group-hover:bg-slate-100 transition-colors">
                    <Gauge className="w-6 h-6 text-slate-600" />
                </div>
                <div className="text-sm text-slate-500 mb-1 font-medium">רמת קושי</div>
                <div className="font-bold text-slate-900 text-lg">{recipe.difficulty}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Recipe Content */}
        <div className="grid md:grid-cols-12 gap-12">
          {/* Ingredients (Side Column - 4 cols) */}
          {recipe.ingredients && recipe.ingredients.length > 0 && (
            <div className="md:col-span-4">
                <IngredientsList ingredients={recipe.ingredients} />
            </div>
          )}

          {/* Instructions (Main Column - 8 cols) */}
          {recipe.instructions && recipe.instructions.length > 0 && (
            <div className="md:col-span-8">
                <div className="py-4 ps-4">
                  <h2 className="text-3xl font-bold text-slate-900 mb-10 flex items-center gap-3">
                    <ChefHat className="w-8 h-8 text-slate-900" />
                    <span>אופן ההכנה</span>
                  </h2>
                  <div className="space-y-12">
                    {recipe.instructions.map((instruction, index) => (
                      <div key={index} className="flex gap-8 group">
                        <div className="flex-shrink-0">
                            <span className="w-12 h-12 bg-white text-slate-900 border-2 border-slate-900 rounded-2xl flex items-center justify-center font-black text-xl shadow-lg group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                            {index + 1}
                            </span>
                        </div>
                        <div className="pt-1">
                          <p className="text-xl text-slate-800 leading-loose font-medium">
                            {instruction}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
            </div>
          )}
        </div>

        {/* If no ingredients or instructions */}
        {(!recipe.ingredients || recipe.ingredients.length === 0) &&
          (!recipe.instructions || recipe.instructions.length === 0) && (
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <p className="text-gray-500">
                פרטים נוספים על מתכון זה יתווספו בקרוב...
              </p>
            </div>
          )}

        {/* Related Recipes */}
        {relatedRecipes.length > 0 && (
          <div className="mt-20 border-t border-slate-200 pt-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center tracking-tight">
              עוד מתכונים בסגנון {recipe.methodName}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedRecipes.map((relatedRecipe) => (
                <RecipeCard key={relatedRecipe.id} recipe={relatedRecipe} />
              ))}
            </div>
          </div>
        )}
    </PageLayout>
  );
}
