import Link from 'next/link';
import { cookingMethods } from '@/lib/data/methods';
import { MethodsFilter } from '@/components/shared/MethodsFilter';

export default function MethodsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-blue-50 flex flex-col">
      <main className="container mx-auto px-4 py-16 flex-grow">
        {/* Header */}
        <div className="text-center mb-12">
          <Link
            href="/"
            className="inline-block text-blue-600 hover:text-blue-800 mb-4"
          >
            ← חזרה לדף הבית
          </Link>
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            שיטות הכנה
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            בחרו את שיטת ההכנה המועדפת עליכם וגלו מתכונים מיוחדים
          </p>
        </div>

        {/* Methods Filter with Search */}
        <MethodsFilter methods={cookingMethods} />
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
