import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const NoteCardContainer = styled.div`
  width: 180px;
  height: 150px;
  border-radius: 8px;
  border: none;
  padding: 16px;
  background: ${(props) => props.bgColor};
`

function NoteCard({ noteData }) {

  return (
    <NoteCardContainer bgColor={noteData.color}>
        <h2 style={{color: 'white'}}>{noteData.title}</h2>
        <p style={{color: '#FFF'}}>{noteData.text}</p>
    </NoteCardContainer>
  )
}

export default NoteCard