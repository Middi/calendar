import React, { Component } from 'react';
import ListItem from '../List-Item';
import './style.css';


class List extends Component {
    render() {
        return (
            <div className="list">
                <ListItem />
            </div>
        )
    }
}

export default List;