import React, { useContext, useState } from 'react'
import { ContextNote } from '../../context/Context'
import NoteCard from '../NoteCard/NoteCard'
import styled from 'styled-components'

const NoteListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`

const NoteListTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: var(--color-blue);
  text-align: center;
`

const NoteList = () => {

  const context = useContext(ContextNote)

  return (
    <div>
      {context.noteCardList.length > 0 &&(
        <NoteListTitle>Você Precisa se Lembrar</NoteListTitle>
      )}
      <NoteListContainer>
        {context.noteCardList.map((note, index) => (
          <NoteCard key={index} noteData={note} index={index} deleteNoteCard={context.deleteNoteCard}/>
        ))}
      </NoteListContainer>
    </div>
  )
}

export default NoteList