import { notFound } from 'next/navigation';
import { getMethodBySlug, getAllMethodSlugs } from '@/lib/data/methods';
import { RecipesFilter } from '@/components/shared/RecipesFilter';
import { PageLayout } from '@/components/layouts/PageLayout';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';

// Generate static params for all methods
export function generateStaticParams() {
  return getAllMethodSlugs().map((slug) => ({
    slug,
  }));
}

// Page component
export default async function MethodDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const method = getMethodBySlug(slug);

  if (!method) {
    notFound();
  }

  return (
    <PageLayout>
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'שיטות הכנה', href: '/methods' },
          { label: method.name }
        ]}
      />

      {/* Header */}
      <div className="mb-12">
        {/* Method Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="text-7xl mb-4">{method.icon}</div>
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            {method.name}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {method.description}
          </p>
        </div>
      </div>

      {/* Recipes Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          מתכונים ({method.recipes.length})
        </h2>

        <RecipesFilter recipes={method.recipes} />
      </div>
    </PageLayout>
  );
}
