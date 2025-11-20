import { PageLayout } from '@/components/layouts/PageLayout';

export default function RecipeDetailLoading() {
  return (
    <PageLayout>
      {/* Breadcrumb skeleton */}
      <div className="flex items-center gap-2 text-sm mb-6 animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-20" />
        <div className="h-4 bg-gray-200 rounded w-4" />
        <div className="h-4 bg-gray-200 rounded w-32" />
        <div className="h-4 bg-gray-200 rounded w-4" />
        <div className="h-4 bg-gray-200 rounded w-40" />
      </div>

      {/* Hero image skeleton */}
      <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />

      {/* Recipe header skeleton */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8 animate-pulse">
        <div className="h-8 bg-gray-200 rounded-full w-32 mb-4" />
        <div className="h-10 bg-gray-200 rounded w-3/4 mb-4" />
        <div className="h-6 bg-gray-200 rounded w-full mb-2" />
        <div className="h-6 bg-gray-200 rounded w-5/6 mb-6" />

        {/* Meta info skeleton */}
        <div className="flex flex-wrap gap-6 mb-6 pb-6 border-b">
          <div className="h-6 bg-gray-200 rounded w-24" />
          <div className="h-6 bg-gray-200 rounded w-24" />
          <div className="h-6 bg-gray-200 rounded w-24" />
        </div>
      </div>

      {/* Content sections skeleton */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Ingredients */}
        <div className="bg-white rounded-xl shadow-lg p-8 animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-32 mb-4" />
          <div className="space-y-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-4 bg-gray-200 rounded w-full" />
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-white rounded-xl shadow-lg p-8 animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-32 mb-4" />
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex gap-4">
                <div className="h-6 w-6 bg-gray-200 rounded-full flex-shrink-0" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-full" />
                  <div className="h-4 bg-gray-200 rounded w-4/5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related recipes skeleton */}
      <div className="bg-white rounded-xl shadow-lg p-8 animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-48 mb-6" />
        <div className="grid md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <div className="h-40 bg-gray-200 rounded-lg" />
              <div className="h-5 bg-gray-200 rounded w-3/4" />
              <div className="h-4 bg-gray-200 rounded w-full" />
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
