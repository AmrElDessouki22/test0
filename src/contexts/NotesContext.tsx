'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Note } from '@/types';

interface NotesContextType {
  notes: Note[];
  addNote: (content: string) => void;
  removeNote: (index: number) => void;
  editNote: (index: number, content: string) => void;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export const NotesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (content: string) => {
    setNotes((prevNotes) => [...prevNotes, { content }]);
  };

  const removeNote = (index: number) => {
    setNotes((prevNotes) => prevNotes.filter((_, i) => i !== index));
  };

  const editNote = (index: number, content: string) => {
    setNotes((prevNotes) => prevNotes.map((note, i) => i === index ? { content } : note));
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, removeNote, editNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = (): NotesContextType => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
};
