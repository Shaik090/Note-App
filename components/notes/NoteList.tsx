import { Note } from '@/types/note';
import NoteItem from './NoteItem';

interface NoteListProps {
  notes: Note[];
  onDelete: (id: string) => void;
  onUpdate: (id: string, newContent: string) => void;
}

export default function NoteList({ notes, onDelete, onUpdate }: NoteListProps) {
  if (notes.length === 0) {
    return <p className="text-grey-500 mt-4">No notes yet</p>;
  }

  return (
    <div className="mt-4 space-y-2">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}
