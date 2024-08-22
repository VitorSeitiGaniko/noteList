import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NoteEditor from './components/NoteEditor/NoteEditor.jsx'
import NoteList from './components/NoteList/NoteList.jsx'
import NoteInput from './components/NoteInput/NoteInput.jsx'
import { ContextNoteProvider } from './context/Context.jsx'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 46px;
`

createRoot(document.getElementById('root')).render(
  <ContextNoteProvider>
  <Container>
    <NoteInput />
    <NoteList />
    <NoteEditor />
  </Container>
  </ContextNoteProvider>
)
