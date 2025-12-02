import Link from 'next/link';
import { PageLayout } from '@/components/layouts/PageLayout';
import { EditorialCard } from '@/components/shared/EditorialCard';

export default function Home() {
  return (
    <PageLayout>
        {/* Immersive Hero Section */}
        <div className="relative w-full h-[60vh] min-h-[500px] rounded-3xl overflow-hidden mb-20 shadow-2xl mx-auto max-w-[1920px] group">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1580476262716-6b369a49a3dc?auto=format&fit=crop&w=1920&q=80"
              alt="Ocean Hero"
              className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/80" />
          </div>

          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
              מהעומק לצלחת
            </h1>
            <p className="text-xl md:text-3xl text-slate-100 mb-10 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
              המדריך השלם לטיפול ובישול דגי ים תיכון
              <br className="hidden md:block" />
              מבית היוצר של קהילת הצוללים
            </p>

            <div className="flex gap-4">
              <Link
                href="/recipes"
                className="bg-white text-slate-900 px-10 py-4 rounded-full text-lg font-bold hover:bg-slate-100 transition-all hover:scale-105 shadow-xl"
              >
                לכל המתכונים
              </Link>
              <Link
                href="/methods"
                className="bg-slate-900/50 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-full text-lg font-medium hover:bg-slate-900/70 transition-all hover:scale-105 shadow-xl"
              >
                שיטות הכנה
              </Link>
            </div>
          </div>
        </div>

        {/* Featured Methods Section */}
        <section className="max-w-7xl mx-auto px-4 mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              שיטות הכנה נבחרות
            </h2>
            <p className="text-xl text-slate-600 font-light">
              דרכים קלאסיות ומודרניות להוציא את המיטב מהדג
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <EditorialCard
              title="סביצ'ה"
              subtitle="הכנה קרה ורעננה"
              image="https://images.unsplash.com/photo-1535400255456-984241443b29?auto=format&fit=crop&w=800&q=80"
              href="/methods/ceviche"
              meta="קלאסי"
            />
            <EditorialCard
              title="טיגון"
              subtitle="פריך ומוזהב"
              image="https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&w=800&q=80"
              href="/methods/frying"
              meta="אהוב הקהל"
            />
            <EditorialCard
              title="גריל"
              subtitle="צלייה על פחמים"
              image="https://images.unsplash.com/photo-1519708227418-c8fd9a3a277d?auto=format&fit=crop&w=800&q=80"
              href="/methods/grilling"
              meta="הכי ישראלי"
            />
          </div>
        </section>

        {/* Community/About Teaser */}
        <section className="bg-slate-900 rounded-3xl overflow-hidden relative max-w-[1920px] mx-auto shadow-2xl">
           <div className="absolute inset-0 opacity-20">
              <img
                src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&w=1920&q=80"
                alt="Underwater"
                className="w-full h-full object-cover"
              />
           </div>
           <div className="relative p-12 md:p-20 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                קהילה של ים ואוכל
              </h2>
              <p className="text-slate-300 text-xl leading-relaxed mb-10 font-light">
                אנחנו לא רק דייגים. אנחנו חוקרים, בשלנים ושומרי טבע.
                הצטרפו אלינו למסע של גילוי טעמים חדשים ושימור המסורת הימית.
              </p>
              <Link
                href="/about"
                className="inline-block border border-white/20 text-white px-8 py-3 rounded-full hover:bg-white hover:text-slate-900 transition-all font-medium"
              >
                קראו עוד עלינו
              </Link>
           </div>
        </section>
    </PageLayout>
  );
}
