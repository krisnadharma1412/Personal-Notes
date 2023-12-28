import React from 'react';
import NotesHeader from "./NotesHeader";
import NotesBody from './NotesBody';
import { getInitialData } from "../utils/index";

class NotesApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            notes: getInitialData(),
            searchText: '',
        }
       
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onSubmitSearchText = this.onSubmitSearchText.bind(this);
    }

    onDeleteHandler(id){
        const notes = this.state.notes.filter(contact => contact.id !== id);
        this.setState({ notes });
    }

    onArchiveHandler(id){
    }

    onSubmitSearchText(event) {
        event.preventDefault();

    }

    onAddNoteHandler({ title, body}) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: +new Date(),
                        archived: false,
                    }
                ]
            };
        });
    }

    render() {
        return (
            <div className="notes-app">
                <NotesHeader searchNotes={this.onSearchNotesHandler}/>
                <NotesBody 
                    addNote={this.onAddNoteHandler} 
                    notes={this.state.notes} 
                    onDelete={this.onDeleteHandler} 
                    onArchive={this.onArchiveHandler}
                />
            </div>
        );
    }
}

export default NotesApp;