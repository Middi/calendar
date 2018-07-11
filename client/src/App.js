import React, { Component } from 'react';
import './App.css';
import Monthly from './components/Monthly';
import Total from './components/Total';
import List from './components/List-view';
import Modal from './components/Modal/modal';

class App extends Component {

  state = {
    year: '',
    modalOpen: false,
    event: {
      name: '',
      dateStart: '',
      dateEnd: '',
      timeStart: '',
      timeEnd: '',
      shiftType: 'Full Day'
    }
  }

  getDate = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let monthName = monthNames[month];
    let today = date.getDate();
    let daysInMonth = new Date(year, month, 0).getDate();

    this.setState({
      year,
      monthName,
      today,
      daysInMonth
    });
  }

  monthMinus = () => {
    console.log('down');
  }

  componentDidMount() {
    this.getDate();
  }

  change = e => {
    // Spread state into new variable
    const NS = {...this.state};
    // Change what needs to be changed
    NS.event[e.target.name] = e.target.value;
    // Set state with new version of state
    this.setState(NS);
  }

  clickSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  }

  ModalEvent = () => {
    const newState = {...this.state};
    newState.modalOpen = !this.state.modalOpen;
    this.setState(newState)
  }

  render() {
    return (
      <div className="wrapper">
        <div className="App">
          <div className="left">
            <Monthly addEvent={this.ModalEvent} monthMinus={this.monthMinus} {...this.state} />
            <Total />
          </div>
          <List />
        </div>
          {
            this.state.modalOpen ?
              <Modal closeModal={this.ModalEvent} clickSubmit={this.clickSubmit} change={this.change} /> :
              null
          }
      </div>
    );
  }
}

export default App;
