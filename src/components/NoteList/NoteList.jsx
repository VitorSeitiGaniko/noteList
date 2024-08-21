import React, { useContext, useState } from 'react'
import { ContextNote } from '../../context/Context'
import NoteCard from '../NoteCard/NoteCard'

const NoteList = () => {

  const context = useContext(ContextNote)

  return (
    <div>
        {context.noteCardList.map((note, index) => (
            <NoteCard key={index} noteData={note} />
        ))}
    </div>
  )
}

export default NoteList