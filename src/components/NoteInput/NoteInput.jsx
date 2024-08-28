import React, { useState, useContext } from 'react'
import { ContextNote } from '../../context/Context'
import styled from 'styled-components'
import NoteForm from '../NoteForm/NoteForm'

const NoteInputContainer = styled.div`
    min-width: 320px;
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
                color: "#" + Math.floor(Math.random()*16777215).toString(16),
                editorOpen: false
            }
        ]);

        setNoteTitle('');
        setNoteText('');

        console.log("context.noteCardList  ==> ", context.noteCardList);
    }

  return (
    <NoteInputContainer>
        <NoteForm 
            titleForm="Criar Lembrete"
            noteTitle={noteTitle}
            setNoteTitle={setNoteTitle}
            noteText={noteText}
            setNoteText={setNoteText}
            buttonForm="Criar Lembrete"
            functionForm={createNote}    
        />
    </NoteInputContainer>
  )
}

export default NoteInput