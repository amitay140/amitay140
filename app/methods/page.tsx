import { cookingMethods } from '@/lib/data/methods';
import { MethodsFilter } from '@/components/shared/MethodsFilter';
import { PageLayout } from '@/components/layouts/PageLayout';

export default function MethodsPage() {
  return (
    <PageLayout>
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          שיטות הכנה
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          בחרו את שיטת ההכנה המועדפת עליכם וגלו מתכונים מיוחדים
        </p>
      </div>

      {/* Methods Filter with Search */}
      <MethodsFilter methods={cookingMethods} />
    </PageLayout>
  );
}
