import { cookingMethods } from '@/lib/data/methods';
import { MethodsFilter } from '@/components/shared/MethodsFilter';
import { PageLayout } from '@/components/layouts/PageLayout';

export default function MethodsPage() {
  // Generic cooking background
  const heroImage = '/images/methods/chef-preparing-fish.png';

  return (
    <PageLayout>
      {/* Full Width Hero Section */}
      <div className="relative w-full h-[40vh] min-h-[300px] rounded-3xl overflow-hidden mb-12 shadow-2xl mx-auto max-w-[1920px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="שיטות הכנה"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight shadow-sm">
            שיטות הכנה
          </h1>
          <p className="text-xl text-slate-100 max-w-2xl mx-auto font-light leading-relaxed shadow-sm">
            בחרו את שיטת ההכנה המועדפת עליכם וגלו מתכונים מיוחדים
          </p>
        </div>
      </div>

      {/* Filter & List Section */}
      <div className="container mx-auto px-4">
        <MethodsFilter methods={cookingMethods} />
      </div>
    </PageLayout>
  );
}
