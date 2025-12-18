import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getRecipeById, getAllRecipeIds, getMethodBySlug } from '@/lib/data/methods';
import { RecipeCard } from '@/components/shared/RecipeCard';
import { RecipeImageGallery } from '@/components/shared/RecipeImageGallery';
import { IngredientsList } from '@/components/shared/IngredientsList';
import { PageLayout } from '@/components/layouts/PageLayout';
import { Clock, Flame, Fish, Gauge, ChefHat, Utensils } from 'lucide-react';

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
        {/* Hero Image Gallery with integrated Title, Description and Method Badge */}
        <RecipeImageGallery
          images={recipe.images || (recipe.image ? [recipe.image] : [])}
          recipeTitle={recipe.title}
          description={recipe.description}
        >
            {/* Integrated Method Badge */}
            <Link
              href={`/methods/${recipe.methodSlug}`}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-white/30 transition-colors pointer-events-auto"
            >
              <Utensils className="w-4 h-4" />
              <span>{recipe.methodName}</span>
            </Link>
        </RecipeImageGallery>

        {/* Meta Info Bar (New Position) */}
        <div className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-b border-slate-200">
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
                      <div key={index} className="flex gap-6 group">
                        <div className="flex-shrink-0">
                            <span className="w-10 h-10 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center font-bold text-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                            {index + 1}
                            </span>
                        </div>
                        <div className="pt-1">
                          <p className="text-xl text-slate-700 leading-loose font-medium group-hover:text-slate-900 transition-colors">
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
