import Link from 'next/link';
import { Recipe } from '@/lib/types';

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  const imagesList = recipe.images || (recipe.image ? [recipe.image] : []);
  const heroImage = imagesList[0]; // Use the first image from the list
  const photoCount = imagesList.length;

  const totalTime = (recipe.prepTime || 0) + (recipe.cookTime || 0);

  return (
    <Link
      href={`/recipes/${recipe.id}`}
      className="group relative h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer bg-slate-900"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        {heroImage && (
          <img
            src={heroImage}
            alt={recipe.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
            // Using regular <img> for consistency with EditorialCard and to avoid next/image host configuration for mock data
          />
        )}
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-colors" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        {/* Photo Count Badge (if applicable) */}
        {photoCount > 1 && (
          <div className="absolute top-4 end-4 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
            +{photoCount - 1} תמונות
          </div>
        )}

        {/* Fish Type Badge (optional, as a subtle tag) */}
        {recipe.fishType && (
          <div className="absolute top-4 start-4 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
            {recipe.fishType}
          </div>
        )}

        <h3 className="text-2xl font-bold mb-2 leading-tight group-hover:text-blue-100 transition-colors">
          {recipe.title}
        </h3>

        <p className="text-slate-200 text-sm font-medium line-clamp-2 opacity-90 group-hover:opacity-100 transition-opacity mb-2">
          {recipe.description}
        </p>

        {/* Meta Info */}
        <div className="flex justify-between items-center text-xs text-slate-300">
          <span>{totalTime > 0 ? `⏱️ ${totalTime} דק׳` : ''}</span>
          <span className="font-semibold">{recipe.difficulty}</span>
        </div>
      </div>
    </Link>
  );
}
