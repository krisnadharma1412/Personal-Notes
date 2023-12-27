import React from 'react';

function NotesItemDate({ createdAt }) {
    console.log('Created Date: ', createdAt);
    return (
        <div className="note-item__date">
            <p>{createdAt}</p>
        </div>
    )
}

export default NotesItemDate