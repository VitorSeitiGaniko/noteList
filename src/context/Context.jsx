import React, { createContext, useState } from 'react'

export const ContextNote = createContext()

export function ContextNoteProvider({ children }) {
    const [noteCardList, setNoteCardList] = useState([])

    function deleteNoteCard(index) {
        setNoteCardList((prevNotes) => prevNotes.filter((element, i) => i !== index));
    }

    return(
        <ContextNote.Provider value={{noteCardList, setNoteCardList, deleteNoteCard}}>
            {children}
        </ContextNote.Provider>
    )
}
