// app/tutorials/page.tsx
import React from 'react';
import { PageLayout } from '@/components/layouts/PageLayout';
import { EditorialCard } from '@/components/shared/EditorialCard';

// Mock data for tutorials
const mockTutorials = [
  {
    id: '1',
    title: 'בטיחות וגהות בצלילה',
    description: 'מדריך יסודי לבטיחות במהלך צלילה וטיפול בדגים.',
    slug: 'safety-hygiene',
    image: 'https://images.unsplash.com/photo-1544551763-46a8723ba3f9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    title: 'סכינים וכישורי פילוט בסיסיים',
    description: 'הכרת סוגי סכינים וטכניקות פילוט לדגים שונים.',
    slug: 'knife-skills-filleting',
    image: 'https://images.unsplash.com/photo-1590701833281-f61e928b36b1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    title: 'איך לאחסן דגים בצורה נכונה',
    description: 'שיטות מומלצות לשמירה על טריות הדג לאחר הדיג.',
    slug: 'fish-storage',
    image: 'https://images.unsplash.com/photo-1615141982880-131f3f4af88e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '4',
    title: 'מהים לצלחת: תהליך הכנת הארוחה',
    description: 'הסבר מפורט על כל השלבים מהדיג ועד לבישול הדג.',
    slug: 'sea-to-plate',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80',
  },
];

export default function TutorialsPage() {
  return (
    <PageLayout>
      <h1 className="text-4xl font-extrabold text-right mb-12 text-slate-900 tracking-tight">
        מדריכים
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {mockTutorials.map((tutorial) => (
          <EditorialCard
            key={tutorial.id}
            title={tutorial.title}
            subtitle={tutorial.description}
            image={tutorial.image}
            href={`/tutorials/${tutorial.slug}`}
            meta="מדריך"
          />
        ))}
      </div>

      <div className="text-center mt-16 text-slate-500">
        <p>מדריכים נוספים יגיעו בקרוב...</p>
      </div>
    </PageLayout>
  );
}