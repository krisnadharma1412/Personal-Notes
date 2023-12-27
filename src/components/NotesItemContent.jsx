import React from 'react';
import NotesItemTitle from './NotesItemTitle';
import NotesItemDate from './NotesItemDate';
import NotesItemBody from './NotesItemBody';

function NotesItemContent({ title, body, createdAt }) {
    return (
        <div className="note-item__content">
            <NotesItemTitle title={title} />
            <NotesItemDate createdAt={createdAt} />
            <NotesItemBody body={body} />
        </div>
    );    
}

export default NotesItemContent;