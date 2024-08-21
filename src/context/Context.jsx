import React, { createContext, useState } from 'react'

export const ContextNote = createContext()

export function ContextNoteProvider({ children }) {
    const [noteCardList, setNoteCardList] = useState([])

    return(
        <ContextNote.Provider value={{noteCardList, setNoteCardList}}>
            {children}
        </ContextNote.Provider>
    )
}
