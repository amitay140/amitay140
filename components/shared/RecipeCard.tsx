import Link from 'next/link';
import Image from 'next/image';
import { Recipe } from '@/lib/types';

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  // Get hero image from images array or fallback to single image field
  const imagesList = recipe.images || (recipe.image ? [recipe.image] : []);
  const heroImage = imagesList[0];
  const photoCount = imagesList.length;

  return (
    <Link
      href={`/recipes/${recipe.id}`}
      className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105 overflow-hidden cursor-pointer"
    >
      {/* Recipe Image */}
      {heroImage && (
        <div className="relative w-full h-48 bg-gradient-to-br from-cyan-100 to-blue-100">
          <Image
            src={heroImage}
            alt={recipe.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Photo Count Badge */}
          {photoCount > 1 && (
            <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
              <span>📷</span>
              <span>+{photoCount - 1}</span>
            </div>
          )}
        </div>
      )}

      {/* Card Content */}
      <div className="p-6">
        {/* Recipe Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {recipe.title}
        </h3>

      {/* Fish Type Badge */}
      {recipe.fishType && (
        <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-3">
          {recipe.fishType}
        </span>
      )}

      {/* Description */}
      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
        {recipe.description}
      </p>

      {/* Meta Info */}
      <div className="flex justify-between items-center text-sm text-gray-500 border-t pt-3">
        <div className="flex gap-3">
          <span>⏱️ {recipe.prepTime + recipe.cookTime} דק׳</span>
        </div>
        <span className="font-semibold">{recipe.difficulty}</span>
      </div>

      {/* Ingredients (if available) */}
      {recipe.ingredients && recipe.ingredients.length > 0 && (
        <div className="mt-4 pt-4 border-t">
          <h4 className="font-semibold text-gray-800 mb-2 text-sm">מרכיבים:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {recipe.ingredients.slice(0, 3).map((ingredient, index) => (
              <li key={index} className="truncate">• {ingredient}</li>
            ))}
            {recipe.ingredients.length > 3 && (
              <li className="text-blue-600 font-medium">
                +{recipe.ingredients.length - 3} נוספים...
              </li>
            )}
          </ul>
        </div>
      )}

      {/* Instructions Preview (if available) */}
      {recipe.instructions && recipe.instructions.length > 0 && (
        <div className="mt-4 pt-4 border-t">
          <h4 className="font-semibold text-gray-800 mb-2 text-sm">אופן ההכנה:</h4>
          <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
            {recipe.instructions.slice(0, 2).map((instruction, index) => (
              <li key={index} className="truncate">{instruction}</li>
            ))}
            {recipe.instructions.length > 2 && (
              <li className="text-blue-600 font-medium">
                +{recipe.instructions.length - 2} שלבים נוספים...
              </li>
            )}
          </ol>
        </div>
      )}
      </div>
    </Link>
  );
}
