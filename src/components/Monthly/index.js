import React, { Component } from 'react';
import './style.css';

class Monthly extends Component {
    render() {
        return (
            <div className="month">
                <div className="title-month">
                    <h2>&lt;</h2>
                    <h1>June</h1>
                    <h2>&gt;</h2>
                </div>
                <div className="calendar">
                    <div className="calendar-header">
                        <p className="day">M</p>
                        <p className="day">T</p>
                        <p className="day">W</p>
                        <p className="day">T</p>
                        <p className="day">F</p>
                        <p className="day">S</p>
                        <p className="day">S</p>

                        <p className="date">1</p>
                        <p className="date">2</p>
                        <p className="date">3</p>
                        <p className="date">4</p>
                        <p className="date">5</p>
                        <p className="date">6</p>
                        <p className="date">7</p>
                        <p className="date">8</p>
                        <p className="date">9</p>
                        <p className="date">10</p>
                        <p className="date">11</p>
                        <p className="date">12</p>
                        <p className="date today">13</p>
                        <p className="date full-day">14</p>
                        <p className="date">15</p>
                        <p className="date">16</p>
                        <p className="date">17</p>
                        <p className="date">18</p>
                        <p className="date half-day">19</p>
                        <p className="date">20</p>
                        <p className="date">21</p>
                        <p className="date">22</p>
                        <p className="date">23</p>
                        <p className="date">24</p>
                        <p className="date">25</p>
                        <p className="date">26</p>
                        <p className="date">27</p>
                        <p className="date">28</p>
                        <p className="date">29</p>
                        <p className="date">30</p>
                        <p className="date">31</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Monthly;