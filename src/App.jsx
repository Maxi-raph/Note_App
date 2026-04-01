import ToggleFormOpen from "./components/ToggleFormOpen";
import NoteList from "./components/NoteList";
import { useState, useEffect } from "react";

const App = () => {
  const [notes, setNotes] = useState(() => {
    try {
      const stored = localStorage.getItem('notes');
      if (stored) {
        const parsed = JSON.parse(stored);
        return Array.isArray(parsed) ? parsed : [];
      }
      return [];
    } catch (error) {
      localStorage.removeItem('notes');
      return [];
    }
  });

  const deleteNote = (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this note');
    if (confirmed) {
      setNotes((arr) => arr.filter(note => note.id !== id));
    }
  };
  
  useEffect(() => {
    try {
      localStorage.setItem('notes', JSON.stringify(notes));
    } catch (error) {
      console.error('Failed to save to localStorage:', error);
    }
  }, [notes]);
  
  return (
    <div className="max-w-sm sm:max-w-lg mx-auto shadow-lg rounded-md bg-gray-100 mt-16 mb-16 p-6">
      <h2 className="text-center text-2xl font-bold mb-4">Notes App</h2>
      <ToggleFormOpen notes={notes} setNotes={setNotes} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
}
 
export default App;