import React from 'react';
import { NotesList } from '@/components/features/NotesList';
import { NoteForm } from '@/components/features/NoteForm';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Notes</h1>
      <NoteForm />
      <NotesList />
    </div>
  );
};

export default HomePage;
