import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Header from '../Header';
import Notes from '../Notes';
import Modal from '../Modal';

export default function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem('notes-data')) || []
  );
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    localStorage.setItem('notes-data', JSON.stringify(notes));
  }, [notes]);

  const addNote = (text, color) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
      color: color
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = id => {
    const newNotes = notes.filter(item => item.id !== id);
    setNotes(newNotes);
  }

  return (
    <>
      <Header handleSearchNote={setSearchText} />
      <Notes
        notes={notes.filter(item => item.text.toLowerCase().includes(searchText))}
        handleDeleteNote={deleteNote}
      />
      <Modal handleAddNote={addNote} />
    </>
  );
}
