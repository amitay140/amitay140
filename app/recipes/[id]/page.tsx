import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getRecipeById, getAllRecipeIds, getMethodBySlug } from '@/lib/data/methods';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { RecipeCard } from '@/components/shared/RecipeCard';

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
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-blue-50 flex flex-col">
      <main className="container mx-auto px-4 py-16 flex-grow">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'שיטות הכנה', href: '/methods' },
            { label: recipe.methodName, href: `/methods/${recipe.methodSlug}` },
            { label: recipe.title }
          ]}
        />

        {/* Hero Image */}
        {recipe.image && (
          <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8 shadow-lg">
            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
        )}

        {/* Header */}
        <div className="mb-8">

          {/* Recipe Header */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            {/* Method Badge */}
            <Link
              href={`/methods/${recipe.methodSlug}`}
              className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 hover:bg-blue-200 transition-colors"
            >
              <span>{recipe.methodIcon}</span>
              <span>{recipe.methodName}</span>
            </Link>

            {/* Title */}
            <h1 className="text-4xl font-bold text-blue-900 mb-4">
              {recipe.title}
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {recipe.description}
            </p>

            {/* Meta Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t">
              {recipe.fishType && (
                <div className="text-center">
                  <div className="text-3xl mb-2">🐟</div>
                  <div className="text-sm text-gray-500 mb-1">סוג דג</div>
                  <div className="font-semibold text-gray-800">{recipe.fishType}</div>
                </div>
              )}

              <div className="text-center">
                <div className="text-3xl mb-2">⏱️</div>
                <div className="text-sm text-gray-500 mb-1">הכנה</div>
                <div className="font-semibold text-gray-800">{recipe.prepTime} דק׳</div>
              </div>

              <div className="text-center">
                <div className="text-3xl mb-2">🔥</div>
                <div className="text-sm text-gray-500 mb-1">בישול</div>
                <div className="font-semibold text-gray-800">{recipe.cookTime} דק׳</div>
              </div>

              <div className="text-center">
                <div className="text-3xl mb-2">📊</div>
                <div className="text-sm text-gray-500 mb-1">רמת קושי</div>
                <div className="font-semibold text-gray-800">{recipe.difficulty}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Recipe Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Ingredients */}
          {recipe.ingredients && recipe.ingredients.length > 0 && (
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span>🛒</span>
                <span>מרכיבים</span>
              </h2>
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Instructions */}
          {recipe.instructions && recipe.instructions.length > 0 && (
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span>👨‍🍳</span>
                <span>אופן ההכנה</span>
              </h2>
              <ol className="space-y-4">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 leading-relaxed pt-1">
                      {instruction}
                    </span>
                  </li>
                ))}
              </ol>
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
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              מתכונים נוספים ב{recipe.methodName}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedRecipes.map((relatedRecipe) => (
                <RecipeCard key={relatedRecipe.id} recipe={relatedRecipe} />
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p>🐟 דג טוב, אוכל טוב!</p>
        </div>
      </footer>
    </div>
  );
}
