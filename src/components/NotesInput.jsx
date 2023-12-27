import React from 'react';

class NotesInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            titleLimit: 50,
        }

        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeHandler(event) {
        const inputValue = event.target.value;
        const remainingChars = this.state.titleLimit - inputValue.length;

        this.setState(() => {
            return {
                title: inputValue,
                remainingChars,
            };
        });
    }

    onBodyChangeHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote({
            title: this.state.title,
            body: this.state.body,
        });

        // Reset form fields and character limit
        this.setState({
            title: '',
            body: '',
            remainingChars: this.state.titleLimit,
        });
    }

    render() {
        return (
            <div className='note-input'>
                <h2 className='note-input__title'>Buat Catatan</h2>
                <p className='note-input__title__char-limit'>{this.state.remainingChars} karakter tersisa</p>
                <form className='note-input__body' onSubmit={this.onSubmitEventHandler}>
                    <input type="text" placeholder='Title' value={this.state.title} onChange={this.onTitleChangeHandler}/>
                    <textarea type="text" placeholder="Body" value={this.state.body} onChange={this.onBodyChangeHandler}/>
                    <button type='submit'>Buat</button>
                </form>
            </div>
        )
    }
}

export default NotesInput;