import React, { Component } from 'react';
import './style.css';


class Modal extends Component {
    render() {
        return (
            <div className="modal-bg">
                <div className="modal">
                    <span className="close">+</span>
                    <h1 className="event-title">Add Event</h1>
                    <input type="text" name="event" onKeyUp={event => this.props.onTextChange(event.target.value)}/>
                    <input type="date" name="date" />
                    <input type="time" name="start" />
                    <input type="time" name="end" />
                    {/* Selection */}
                </div>
            </div>
        )
    }
}

export default Modal;