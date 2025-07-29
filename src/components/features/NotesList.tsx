'use client';
import React from 'react';
import { useNotes } from '@/contexts/NotesContext';
import { Button } from '@/components/ui/Button';

export const NotesList: React.FC = () => {
  const { notes, removeNote, setNoteToEdit } = useNotes();

  const handleEdit = (note) => {
    if (setNoteToEdit && typeof setNoteToEdit === 'function') {
      setNoteToEdit(note);
    } else {
      console.error('setNoteToEdit is not a function or is undefined');
    }
  }

  return (
    <ul className="space-y-4">
      {notes.map((note, index) => (
        <li key={index} className="flex justify-between items-center p-4 bg-gray-100 rounded">
          <span>{note.content}</span>
          <div>
            <Button onClick={() => handleEdit(note)} className="mr-2">Edit</Button>
            <Button onClick={() => removeNote(index)} className="text-red-500">Delete</Button>
          </div>
        </li>
      ))}
    </ul>
  );
};
