import Link from 'next/link';
import { PageLayout } from '@/components/layouts/PageLayout';

export default function NotFound() {
  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        {/* Icon */}
        <div className="text-8xl mb-6">🐟❓</div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          הדף לא נמצא
        </h1>

        {/* Message */}
        <p className="text-xl text-gray-600 mb-8 max-w-md">
          הדג שחיפשת שחה לכיוון אחר... אולי תמצא מה שאתה מחפש בדפים אחרים?
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            חזרה לדף הבית
          </Link>
          <Link
            href="/methods"
            className="px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            עיין במתכונים
          </Link>
        </div>

        {/* Error code */}
        <p className="mt-12 text-gray-400 text-sm">
          שגיאה 404
        </p>
      </div>
    </PageLayout>
  );
}
