'use client';
import React, { useState } from 'react';
import { useNotes } from '@/contexts/NotesContext';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

interface NoteFormProps {
  note?: string;
  onEdit?: (note: string) => void;
}

export const NoteForm: React.FC<NoteFormProps> = ({ note: initialNote = '', onEdit }) => {
  const [note, setNote] = useState(initialNote);
  const { addNote, deleteNote } = useNotes();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (note.trim()) {
      if (onEdit) {
        onEdit(note);
      } else {
        addNote(note);
      }
      setNote('');
    }
  };

  const handleDelete = () => {
    if (initialNote) {
      deleteNote(initialNote);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <Input value={note} onChange={(e) => setNote(e.target.value)} placeholder="Enter your note" />
      <Button onClick={handleSubmit}>{onEdit ? 'Edit Note' : 'Add Note'}</Button>
      {initialNote && <Button onClick={handleDelete}>Delete Note</Button>}
    </form>
  );
};
