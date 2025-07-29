'use client';
import React from 'react';
import { useNotes } from '@/contexts/NotesContext';

export const NotesList: React.FC = () => {
  const { notes, removeNote } = useNotes();

  return (
    <ul className="space-y-4">
      {notes.map((note, index) => (
        <li key={index} className="flex justify-between items-center p-4 bg-gray-100 rounded">
          <span>{note.content}</span>
          <button onClick={() => removeNote(index)} className="text-red-500">Delete</button>
        </li>
      ))}
    </ul>
  );
};
