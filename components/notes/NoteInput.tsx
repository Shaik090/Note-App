'use client';

import { useState } from 'react';

interface NoteInputProps {
  onAdd: (title: string, content: string) => void;
}

export default function NoteInput({ onAdd }: NoteInputProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (!title.trim() && !content.trim()) return;

    onAdd(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <div className="p-4 w-full border rounded-lg space-y-2">
      <input
        className="w-full border p-2 rounded"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <textarea
        className="w-full h-96 border text-black p-2 rounded"
        placeholder="Write something..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleSubmit}
      >
        Add Note
      </button>
    </div>
  );
}
