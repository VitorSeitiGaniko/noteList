import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import '../../assets/icons.css'
import NoteEditor from '../NoteEditor/NoteEditor'

const NoteCardContainer = styled.div`
  width: 180px;
  min-height: 150px;
  border-radius: 8px;
  border: none;
  padding: 16px;
  background: ${(props) => props.bgColor};
  position: relative;
  user-select: none;
`

const NoteCardIcon = styled.span`
  top: 10px;
  right: 10px;
  cursor: pointer;
`

function NoteCard({ noteData }) {

  const [noteCardEditorOpen, setNoteCardEditorOpen] = useState(false)

  function handleEditNote() {
    setNoteCardEditorOpen(true)
  }

  return (
    <NoteCardContainer bgColor={noteData.color}>
      <NoteCardIcon className='iconEdit' onClick={handleEditNote} ></NoteCardIcon>
        <h2 style={{color: 'var(--color-white)'}}>{noteData.title}</h2>
        <p style={{color: 'var(--color-white)'}}>{noteData.text}</p>

      {noteCardEditorOpen && 
        <NoteEditor setNoteCardEditorOpen={setNoteCardEditorOpen} noteData={noteData}/>
      }
    </NoteCardContainer>
  )
}

export default NoteCard