import { PageLayout } from '@/components/layouts/PageLayout';
import { RecipeCardSkeletonGrid } from '@/components/shared/RecipeCardSkeleton';

export default function MethodDetailLoading() {
  return (
    <PageLayout>
      {/* Breadcrumb skeleton */}
      <div className="flex items-center gap-2 text-sm mb-6 animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-20" />
        <div className="h-4 bg-gray-200 rounded w-4" />
        <div className="h-4 bg-gray-200 rounded w-32" />
      </div>

      {/* Header skeleton */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8 animate-pulse">
        <div className="h-10 bg-gray-200 rounded w-48 mb-4" />
        <div className="h-6 bg-gray-200 rounded w-full mb-2" />
        <div className="h-6 bg-gray-200 rounded w-3/4" />
      </div>

      {/* Search and filter skeleton */}
      <div className="mb-8 animate-pulse">
        <div className="h-12 bg-gray-200 rounded-lg w-full" />
      </div>

      {/* Recipe cards skeleton */}
      <RecipeCardSkeletonGrid count={6} />
    </PageLayout>
  );
}
