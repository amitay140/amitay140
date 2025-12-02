// app/about/page.tsx
import React from 'react';
import { PageLayout } from '@/components/layouts/PageLayout';

export default function AboutPage() {
  return (
    <PageLayout>
      <h1 className="text-4xl font-extrabold text-right mb-8 text-gray-900">
        אודות הקבוצה
      </h1>

      <div className="prose prose-lg mx-auto text-right text-gray-700">
        <p className="mb-4">
          ברוכים הבאים לקהילת צוללי הדיג הישראלית!
          אנחנו קבוצה של חובבי ים ודיג, המאוחדים באהבה לים התיכון ולדגים הטריים שהוא מעניק לנו.
          מטרתנו היא לא רק ליהנות מהאתגר שבדיג חופשי, אלא גם לחלוק את הידע והניסיון שלנו בהכנה ובישול של הדגים.
        </p>
        <h2 className="text-3xl font-bold mb-4">החזון שלנו</h2>
        <p className="mb-4">
          אנו מאמינים שבכל דג שנדוג יש פוטנציאל לארוחה מדהימה. האתר הזה הוקם כדי לשמש כמרכז ידע,
          בו נוכל לשתף מתכונים ייחודיים שעוברים מדור לדור, ללמד שיטות ניקוי ופילוט,
          ולהעניק השראה לכל מי שרוצה להביא את הים אל הצלחת בצורה הטובה ביותר.
        </p>
        <h2 className="text-3xl font-bold mb-4">איך להצטרף אלינו</h2>
        <p className="mb-4">
          אם אתם צוללי דיג פעילים או פשוט אוהבים את עולם הים ובישול דגים,
          אתם מוזמנים להצטרף לקהילה שלנו. לפרטים נוספים, אנא צרו קשר דרך קבוצת הוואטסאפ שלנו.
        </p>
        <p className="font-semibold mt-8">
          דג טוב, אוכל טוב!
        </p>
      </div>
    </PageLayout>
  );
}
