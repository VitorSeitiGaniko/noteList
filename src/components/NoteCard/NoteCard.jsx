import React from 'react'

function NoteCard({ noteData }) {
  return (
    <div style={{background: 'purple'}}>
        <h2 style={{color: 'white'}}>{noteData.title}</h2>
        <p style={{color: '#FFF'}}>{noteData.text}</p>
    </div>
  )
}

export default NoteCard