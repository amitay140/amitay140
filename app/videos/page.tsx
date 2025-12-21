// app/videos/page.tsx
import React from 'react';
import { PageLayout } from '@/components/layouts/PageLayout';
import { EditorialCard } from '@/components/shared/EditorialCard';

// Mock data for video cards
const mockVideos = [
  {
    id: '1',
    title: 'ניקוי דג לברק (שלב אחר שלב)',
    thumbnail: '/images/videos/clean-labrak.png', // Placeholder
    duration: '12:34',
    category: 'ניקוי דגים',
  },
  {
    id: '2',
    title: 'פילוט דניס למתחילים',
    thumbnail: '/images/videos/fillet-denis.png', // Placeholder
    duration: '08:15',
    category: 'פילה',
  },
  {
    id: '3',
    title: 'בישול דגים על הגריל: סודות השף',
    thumbnail: '/images/videos/grill-secrets.png', // Placeholder
    duration: '15:00',
    category: 'גריל',
  },
  {
    id: '4',
    title: 'מתכון לסביצ\'ה מהיר וקל',
    thumbnail: '/images/videos/ceviche-bowl.png', // Placeholder
    duration: '06:40',
    category: 'בישול ביתי',
  },
];

export default function VideosPage() {
  return (
    <PageLayout>
      <h1 className="text-4xl font-extrabold text-right mb-12 text-slate-900 tracking-tight">
        סרטונים ומדריכים
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockVideos.map((video) => (
          <EditorialCard
            key={video.id}
            title={video.title}
            subtitle={video.category}
            image={video.thumbnail}
            href={`/videos/${video.id}`}
            meta={video.duration}
          />
        ))}
      </div>

      <div className="text-center mt-16 text-slate-500">
        <p>מדריכים וסרטונים נוספים יגיעו בקרוב...</p>
      </div>
    </PageLayout>
  );
}
