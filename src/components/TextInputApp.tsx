import React, { DetailedHTMLFactory, DetailedHTMLProps, useState } from "react";
import "../App.css";
import "./TextInputApp.css";

type Props = {};

const defaultNote = {
  content: "",
  author: "",
};

export default function TextInputApp() {
  //States
  const [note, setNote] = useState(defaultNote); // ** state x objects
  const [allNotes, setAllNotes] = useState<any>([]); // ** state x array
  const [editNote, setEditNote] = useState<any>(null); // ** state x array

  //Fuctions form Input
  function onValueChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event!.target;
    setNote((prevNote) => {
      return {
        ...prevNote, // previous note
        [name]: value, // update the value of the name [name
      };
    });
  }

  function onEditValueChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event!.target;
    setEditNote((prevNote: any) => {
      return {
        ...prevNote, // previous note
        [name]: value, // update the value of the name [name
      };
    });
  }

  //Functions add, edit, delete
  function onNoteSummit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setAllNotes((prevAllNotes: any) => {
      const newNote: any = { ...note };
      newNote.id = Date.now().toString();

      return [newNote, ...prevAllNotes];
    });
    setNote(defaultNote);

    //console.log(note);
  }

  function onEditNoteSumbit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setAllNotes((prevAllNotes: any) => {
      return prevAllNotes.map((theNote: any) => {
        return theNote.id === editNote.id ? editNote : theNote;
      });
    });

    setEditNote(null); //close popup edit form
  }

  function onNoteDelete(noteId: number) {
    setAllNotes((prevAllNotes: any) => {
      return prevAllNotes.filter((theNote: any) => theNote.id !== noteId);
    });
  }

  //Elements
  const noteElements = allNotes.map((theNote: any) => {
    return (
      <div key={theNote.id} className=" my-3 rounded-xl p-4 bg-lime-300">
        <div className=" bg-gradient-to-r from-white p-2">
          <p>{theNote.content}</p>
          <h5 className="">{theNote.author}</h5>
        </div>
        <div className=" mt-4">
          <a
            className=" hover:text-gray-500"
            onClick={() => setEditNote(theNote)}
          >
            Edit
          </a>
          <span> | </span>
          <a
            className=" bg-slate-100 p-1 rounded-md text-red-600"
            onClick={() => {
              onNoteDelete(theNote.id);
            }}
          >
            Delete
          </a>
        </div>
      </div>
    );
  });

  let editNoteElement: any = null;
  if (!!editNote) {
    editNoteElement = (
      <form className="app-edit-note" onSubmit={onEditNoteSumbit}>
        <textarea
          className="w-full border border-gray-400 p-2 my-2 rounded-md"
          rows={2}
          placeholder="Word in your mind"
          name="content"
          value={editNote.content}
          onChange={onEditValueChange}
        />
        <input
          className="w-full border border-gray-400 p-2 my-2 rounded-md"
          type="text"
          placeholder="Author"
          name="author"
          value={editNote.author}
          onChange={onEditValueChange}
        />
        <button
          className=" inline-block bg-cyan-200 px-6 pb-2 pt-2.5 rounded-full border-cyan-400 text-blue-800
              hover:bg-cyan-400 hover:text-white"
          type="submit"
        >
          <p className="text-xl">Edits your message</p>
        </button>
      </form>
    );
  }

  return (
    <section className="app-section">
      <div className="app-container">
        <h3>Let's try writing</h3>
        <form onSubmit={onNoteSummit}>
          <textarea
            className="app-search-input rounded-md"
            rows={3}
            placeholder="Word in your mind"
            name="content"
            value={note.content}
            onChange={onValueChange}
          />
          <input
            className="w-full border border-gray-400 p-2 my-2 rounded-md"
            type="text"
            placeholder="Author"
            name="author"
            value={note.author}
            onChange={onValueChange}
          />
          <button
            className=" inline-block bg-cyan-200 px-6 pb-2 pt-2.5 rounded-full border-cyan-400 text-blue-800
              hover:bg-cyan-400 hover:text-white"
            type="submit"
          >
            <p className="text-xl">Add your message</p>
          </button>
        </form>
        <div>{noteElements}</div>
      </div>
      <div>{editNoteElement}</div>
    </section>
  );
}
