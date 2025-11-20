export function RecipeCardSkeleton() {
  return (
    <div className="block bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      {/* Image skeleton */}
      <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300" />

      {/* Content skeleton */}
      <div className="p-6">
        {/* Title */}
        <div className="h-6 bg-gray-200 rounded mb-3 w-3/4" />

        {/* Badge */}
        <div className="h-6 bg-gray-200 rounded-full w-20 mb-3" />

        {/* Description */}
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
        </div>

        {/* Meta info */}
        <div className="flex justify-between items-center border-t pt-3">
          <div className="h-4 bg-gray-200 rounded w-16" />
          <div className="h-4 bg-gray-200 rounded w-12" />
        </div>

        {/* Ingredients section */}
        <div className="mt-4 pt-4 border-t">
          <div className="h-4 bg-gray-200 rounded w-20 mb-2" />
          <div className="space-y-2">
            <div className="h-3 bg-gray-200 rounded w-full" />
            <div className="h-3 bg-gray-200 rounded w-4/5" />
            <div className="h-3 bg-gray-200 rounded w-5/6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function RecipeCardSkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <RecipeCardSkeleton key={i} />
      ))}
    </div>
  );
}
