import React from 'react';
import NotesInput from './NotesInput';
import NotesList from './NotesList';

function NotesBody({ addNote, notes, onDelete, onArchive }) {
    return (
        <div className="note-app__body">
            <NotesInput addNote={addNote}/>
            <NotesList notes={notes} onDelete={onDelete} onArchive={onArchive}/>
        </div>
    )
}

export default NotesBody;