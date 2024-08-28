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

const NoteCardIconRemove = styled.span`
  top: 10px;
  left: 10px;
  cursor: pointer;
`

const NoteCardP = styled.p`
  color: var(--color-white);
  word-wrap: break-word;
`

function NoteCard({ noteData, index, deleteNoteCard }) {

  const [noteCardEditorOpen, setNoteCardEditorOpen] = useState(false)

  function handleEditNote() {
    setNoteCardEditorOpen(true)
  }

  return (
    <NoteCardContainer bgColor={noteData.color}>
      <NoteCardIconRemove className='iconRemove' onClick={() => deleteNoteCard(index)}></NoteCardIconRemove>
      <NoteCardIcon className='iconEdit' onClick={handleEditNote} ></NoteCardIcon>
        <h2 style={{color: 'var(--color-white)'}}>{noteData.title}</h2>
        <NoteCardP>{noteData.text}</NoteCardP>

      {noteCardEditorOpen && 
        <NoteEditor setNoteCardEditorOpen={setNoteCardEditorOpen} noteData={noteData}/>
      }
    </NoteCardContainer>
  )
}

export default NoteCard