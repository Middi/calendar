import React, { Component } from 'react';
import './style.css';


class Modal extends Component {
    render() {
        return (
            <div className="modal-bg">
                <div className="modal">
                    <span className="close">+</span>
                    <h1 className="event-title">Add Event</h1>
                    <form>
                        <label>Event</label>
                        <input type="text" name="name" onKeyUp={e => this.props.change(e)} />
                        <label>Start Date</label>
                        <input type="date" name="dateStart" onKeyUp={e => this.props.change(e)} />
                        <label>Start Time</label>
                        <input type="time" name="timeStart" onKeyUp={e => this.props.change(e)} />
                        <label>End Date</label>
                        <input type="date" name="dateEnd" onKeyUp={e => this.props.change(e)} />
                        <label>End Time</label>
                        <input type="time" name="timeEnd" onKeyUp={e => this.props.change(e)} />
                        <label>Shift Type</label>
                        <select>
                            <option value="1000" name="shiftType" onKeyUp={e => this.props.change(e)}>Full Day</option>
                            <option value="500" name="shiftType" onKeyUp={e => this.props.change(e)}>Half Day</option>
                        </select>
                        <button onClick={(e) => this.props.clickSubmit(e)}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Modal;