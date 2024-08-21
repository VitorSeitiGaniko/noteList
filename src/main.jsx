import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NoteEditor from './components/NoteEditor/NoteEditor.jsx'
import NoteList from './components/NoteList/NoteList.jsx'
import NoteInput from './components/NoteInput/NoteInput.jsx'
import { ContextNoteProvider } from './context/Context.jsx'

createRoot(document.getElementById('root')).render(
  <ContextNoteProvider>
  <StrictMode>
    <NoteInput />
    <NoteList />
    <NoteEditor />
  </StrictMode>
  </ContextNoteProvider>
)
