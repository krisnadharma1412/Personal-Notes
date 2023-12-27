import React from 'react';

function NotesItemBody({ body }) {
    return (
        <div className="note-item__body">
            <p>{body}</p>
        </div>
    )
}

export default NotesItemBody;