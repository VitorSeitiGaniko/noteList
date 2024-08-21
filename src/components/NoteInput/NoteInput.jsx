import React, { useState, useContext } from 'react'
import { ContextNote } from '../../context/Context'

const NoteInput = () => {
const [noteTitle, setNoteTitle] = useState('')
const [noteText, setNoteText] = useState('')

const context = useContext(ContextNote)

function createNote(event) {

    event.preventDefault();

    context.setNoteCardList(prevNoteCardList => [
        ...prevNoteCardList,
        {
            title: noteTitle,
            text: noteText
        }
    ]);

    console.log("context.noteCardList  ==> ", context.noteCardList);
}

  return (
    <div>
        <input
            placeholder="Título"
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
        />
        <textarea
            placeholder="Texto"
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
        />
        <button onClick={createNote}>
            Criar Nota
        </button>
    </div>
  )
}

export default NoteInput