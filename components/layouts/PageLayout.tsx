import { ReactNode } from 'react';
import { Footer } from './Footer';

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-blue-50 flex flex-col">
      <main className="container mx-auto px-4 py-16 flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
