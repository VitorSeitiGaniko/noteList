import React, {useState} from 'react'
import styled from 'styled-components'
import '../../assets/icons.css'
import NoteForm from '../NoteForm/NoteForm'

const NoteEditorBackground = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`

const NoteEditorContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 360px;
  background: var(--color-white);
  border-radius: 6px;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.5);
  padding: 24px;

  @media (max-width: 768px) {
    width: 84vw;
  }
`

const NoteEditorIcon = styled.span`
  top: 10px;
  right: 10px;
  cursor: pointer;
`

function NoteEditor({setNoteCardEditorOpen, noteData}) {
  const [noteTitle, setNoteTitle] = useState(noteData.title)
  const [noteText, setNoteText] = useState(noteData.text)

  function handleEditNote(event) {
    event.preventDefault();

    noteData.title = noteTitle
    noteData.text = noteText

    setNoteCardEditorOpen(false)
  }

  return (
    <NoteEditorBackground>
      <NoteEditorContainer>
        <NoteEditorIcon className='iconClose' onClick={() => setNoteCardEditorOpen(false)}></NoteEditorIcon>
        <NoteForm 
            titleForm="Editar Lembrete"
            noteTitle={noteTitle}
            setNoteTitle={setNoteTitle}
            noteText={noteText}
            setNoteText={setNoteText}
            buttonForm="Atualizar Lembrete"
            functionForm={handleEditNote}    
        />
      </NoteEditorContainer>
    </NoteEditorBackground>
  )
}

export default NoteEditor