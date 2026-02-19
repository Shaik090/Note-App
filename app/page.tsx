'use client';
import NoteInput from '@/components/notes/NoteInput';
import NoteList from '@/components/notes/NoteList';
import { Note } from '@/types/note';
import { useState, useEffect } from 'react';

export default function Home() {
  const [notes, setNotes] = useState<Note[]>(() => {
    if (typeof window !== 'undefined') return [];
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const addNote = (title: string, content: string) => {
    const newNote: Note = {
      id: crypto.randomUUID(),
      title,
      content,
      createdAt: Date.now(),
    };
    setNotes((prev) => [newNote, ...prev]);
  };

  const deleteNote = (id: string) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  const updateNote = (id: string, newContent: string) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, content: newContent } : note,
      ),
    );
  };

  // useEffect(() => {
  //   const savedNotes = localStorage.getItem('notes');
  //   if (savedNotes) {
  //     setNotes(JSON.parse(savedNotes));
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <main className="max-w-7xl h-max mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Note</h1>
      <NoteInput onAdd={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} onUpdate={updateNote} />
    </main>
  );
}
