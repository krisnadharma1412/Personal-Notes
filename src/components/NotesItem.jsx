import React from 'react';
import NotesItemContent from './NotesItemContent';
import NotesItemAction from './NotesItemAction';

function NotesItem({ title, body, createdAt, id, onDelete, onArchive }) {
  return (
    <div className="note-item">
      <NotesItemContent title={title} body={body} createdAt={createdAt}/>
      <NotesItemAction id={id} onDelete={onDelete} onArchive={onArchive} />
    </div>
  );
}
export default NotesItem;
