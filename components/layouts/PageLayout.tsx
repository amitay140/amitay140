import { ReactNode } from 'react';
import { Footer } from './Footer';

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <main className="container mx-auto px-4 py-16 flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
