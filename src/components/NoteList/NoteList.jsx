import React, { useContext, useState } from 'react'
import { ContextNote } from '../../context/Context'
import NoteCard from '../NoteCard/NoteCard'
import styled from 'styled-components'

const NoteListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
`

const NoteList = () => {

  const context = useContext(ContextNote)

  return (
    <NoteListContainer>
        {context.noteCardList.map((note, index) => (
            <NoteCard key={index} noteData={note} />
        ))}
    </NoteListContainer>
  )
}

export default NoteList