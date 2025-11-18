import Link from 'next/link';
import { cookingMethods, getAllRecipes } from '@/lib/data/methods';
import { PageLayout } from '@/components/layouts/PageLayout';

export default function Home() {
  const totalMethods = cookingMethods.length;
  const totalRecipes = getAllRecipes().length;
  return (
    <PageLayout>
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-blue-900 mb-4">
            🐟 מתכוני דגים
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            ברוכים הבאים לאוסף מתכונים לדגים שנתפסו בצלילה חופשית
          </p>
          <p className="text-lg text-gray-600 mb-8">
            שתפו, למדו והכינו ארוחות מדהימות מהדגים שלכם
          </p>

          {/* Quick Stats */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="bg-white/80 backdrop-blur-sm px-6 py-4 rounded-full shadow-md">
              <span className="text-3xl font-bold text-blue-600">{totalRecipes}</span>
              <span className="text-gray-700 mr-2">מתכונים</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-6 py-4 rounded-full shadow-md">
              <span className="text-3xl font-bold text-blue-600">{totalMethods}</span>
              <span className="text-gray-700 mr-2">שיטות הכנה</span>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Link
            href="/methods"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            צפו בשיטות הכנה ←
          </Link>
        </section>

        {/* Quick Info Cards */}
        <section className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          <Link
            href="/methods/ceviche"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl text-center transition-all hover:scale-105 cursor-pointer"
          >
            <div className="text-4xl mb-3">🍋</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">סביצ&apos;ה</h3>
            <p className="text-gray-600 text-sm">הכנה קרה בלימון</p>
          </Link>

          <Link
            href="/methods/frying"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl text-center transition-all hover:scale-105 cursor-pointer"
          >
            <div className="text-4xl mb-3">🍳</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">טיגון</h3>
            <p className="text-gray-600 text-sm">פריך ומוזהב</p>
          </Link>

          <Link
            href="/methods/grilling"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl text-center transition-all hover:scale-105 cursor-pointer"
          >
            <div className="text-4xl mb-3">🔥</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">גריל</h3>
            <p className="text-gray-600 text-sm">צלייה על האש</p>
          </Link>
        </section>

        {/* About Section */}
        <section className="mt-16 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            על הפרויקט
          </h2>
          <p className="text-gray-600 leading-relaxed">
            אתר זה נועד לשמר ולשתף את הידע הקולינרי של קהילת הדייגים החופשיים בישראל.
            כאן תמצאו מתכונים, טכניקות הכנה וטיפים לטיפול נכון בדגים מרגע הדייג ועד לצלחת.
          </p>
        </section>
    </PageLayout>
  );
}
