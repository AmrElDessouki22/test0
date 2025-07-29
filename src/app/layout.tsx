import React from 'react';
import '@/app/globals.css';
import { NotesProvider } from '@/contexts/NotesContext';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <NotesProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </NotesProvider>
      </body>
    </html>
  );
};

export default RootLayout;
