import { notFound } from 'next/navigation';
import { getMethodBySlug, getAllMethodSlugs } from '@/lib/data/methods';
import { RecipesFilter } from '@/components/shared/RecipesFilter';
import { PageLayout } from '@/components/layouts/PageLayout';

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

  // Use the local high-quality hero image for the method page
  // We prioritize the specific local image for the hero section
  const heroImage = method.image || '/images/methods/chef-preparing-fish.png';

  return (
    <PageLayout>
      {/* Full Width Hero Section */}
      <div className="relative w-full h-[50vh] min-h-[400px] rounded-3xl overflow-hidden mb-12 shadow-2xl mx-auto max-w-[1920px]">
        {/* Background Image */}
        <div className="absolute inset-0">
           {/* Using standard img tag to avoid config issues with dynamic/fallback urls in mock data */}
          <img
            src={heroImage}
            alt={method.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight shadow-sm">
            {method.name}
          </h1>
          <p className="text-xl md:text-2xl text-slate-100 max-w-3xl mx-auto font-light leading-relaxed shadow-sm">
            {method.description}
          </p>
        </div>
      </div>

      {/* Recipes Section */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8 border-b border-slate-200 pb-4">
            <h2 className="text-3xl font-bold text-slate-900">
            מתכונים נבחרים
            </h2>
            <span className="text-slate-500 font-medium bg-slate-100 px-4 py-2 rounded-full">
                {method.recipes.length} מתכונים
            </span>
        </div>

        <RecipesFilter recipes={method.recipes} />
      </div>
    </PageLayout>
  );
}