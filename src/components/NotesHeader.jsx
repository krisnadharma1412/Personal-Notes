import React from "react";

function NotesHeader () {
    return (
        <div className="notes-app__header">
            <h1>Notes</h1>
            {/* <form onSubmit={this.onSubmitSearchText}>
                <input
                    type="text"
                    placeholder="Search notes..."
                    value={this.onSearchTextChange}
                    onChange={this.onSearchTextChange}
                />
            </form> */}
        </div>
    );
}


export default NotesHeader;