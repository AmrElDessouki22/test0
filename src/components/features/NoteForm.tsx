'use client';
import React, { useState } from 'react';
import { useNotes } from '@/contexts/NotesContext';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export const NoteForm: React.FC = () => {
  const [note, setNote] = useState('');
  const { addNote } = useNotes();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (note.trim()) {
      addNote(note);
      setNote('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <Input value={note} onChange={(e) => setNote(e.target.value)} placeholder="Enter your note" />
      <Button onClick={handleSubmit}>Add Note</Button>
    </form>
  );
};
