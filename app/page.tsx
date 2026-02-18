'use client';
import NoteInput from '@/components/notes/NoteInput';
import { Note } from '@/types/note';
import { useState } from 'react';

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (title: string, content: string) => {
    const newNote: Note = {
      id: crypto.randomUUID(),
      title,
      content,
      createdAt: Date.now(),
    };
    setNotes((prev) => [newNote, ...prev]);
  };
  return (
    <main className="max-w-7xl h-max mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Next Notes</h1>
      <NoteInput onAdd={addNote} />
    </main>
  );
}
