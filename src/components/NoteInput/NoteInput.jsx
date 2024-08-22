import React, { useState, useContext } from 'react'
import { ContextNote } from '../../context/Context'
import styled from 'styled-components'

const NoteInputContainer = styled.div`
    min-width: 320px;
`

const NoteInputForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
`

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
            text: noteText,
            color: "#" + Math.floor(Math.random()*16777215).toString(16)
        }
    ]);

    console.log("context.noteCardList  ==> ", context.noteCardList);
}

  return (
    <NoteInputContainer>
        <NoteInputForm onSubmit={createNote}>
            <input
                placeholder="Título"
                value={noteTitle}
                onChange={(e) => setNoteTitle(e.target.value)}
            />
            <input
                placeholder="Texto"
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
            />
            <button onClick={createNote}>
                Criar Nota
            </button>
        </NoteInputForm>
        
    </NoteInputContainer>
  )
}

export default NoteInput