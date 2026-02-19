'use client';

import { Note } from '@/types/note';
import { useState } from 'react';

interface NoteItemProps {
  note: Note;
  onDelete: (id: string) => void;
  onUpdate: (id: string, newContent: string) => void;
}

export default function NoteItem({ note, onDelete, onUpdate }: NoteItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(note.content);

  const handleSave = () => {
    if (!editContent.trim()) return;

    onUpdate(note.id, editContent);
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between border p-2 rounded">
      {isEditing ? (
        <>
          <input
            className="border p-1 rounded flex-1 mr-2"
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
          />
          <button onClick={handleSave} className="text-green-600 mr-2 text-sm">
            Save
          </button>
        </>
      ) : (
        <>
          <span>{note.content}</span>
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-500 text-sm cursor-pointer mr-2"
          >
            Edit
          </button>
        </>
      )}
      <button
        onClick={() => onDelete(note.id)}
        className="text-red-500 text-sm cursor-pointer"
      >
        Delete
      </button>
    </div>
  );
}
