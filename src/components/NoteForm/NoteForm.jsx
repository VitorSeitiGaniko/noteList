import React, { useState } from 'react'
import styled from 'styled-components'
import '../../assets/variables.css'

const NoteInputForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
`

const NoteInputField = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    border: 2px solid var(--color-gray);
    border-radius: 8px;
    padding: 16px;

    &::placeholder {
        font-family: 'Open Sans', sans-serif;
    }

    &:focus {
        border-color: var(--color-blue);
        outline: none;
    }
`

const NoteInputFieldText = styled.textarea`
    box-sizing: border-box;
    width: 100%;
    height: 120px;
    border: 2px solid var(--color-gray);
    border-radius: 8px;
    font-family: var(--font-family);
    padding: 16px;
    resize: none;

    &::placeholder {
        font-family: 'Open Sans', sans-serif;
    }

    &:focus {
        border-color: var(--color-blue);
        outline: none;
    }
`

const NoteInputButton = styled.button`
    box-sizing: border-box;
    margin: auto;
    width: 90%;
    height: 40px;
    border: none;
    background: var(--color-blue);
    color: var(--color-white);
    font-weight: 700;

    &:focus {
        outline: none;
    }
`

const NoteInputTitle = styled.h1`
    font-size: 32px;
    font-weight: 700;
    color: var(--color-blue);
    text-align: center;
`

function NoteForm({titleForm, noteTitle, setNoteTitle, noteText, setNoteText, buttonForm, functionForm}) {    
    return (
        <div>
            <NoteInputTitle>{titleForm}</NoteInputTitle>
            <NoteInputForm onSubmit={functionForm}>
                <NoteInputField
                    placeholder="Título"
                    value={noteTitle}
                    onChange={(e) => setNoteTitle(e.target.value)}
                />
                <NoteInputFieldText
                    placeholder="Texto"
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                />
                <NoteInputButton onClick={functionForm}>
                    {buttonForm}
                </NoteInputButton>
            </NoteInputForm>
        </div>
    )
}

export default NoteForm