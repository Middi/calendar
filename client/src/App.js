import React, { Component } from 'react';
import './App.css';
import Monthly from './components/Monthly';
import Total from './components/Total';
import List from './components/List-view';
import Modal from './components/Modal/modal';

class App extends Component {

  state = {
    year: '',
    modalOpen: true,
    event: {
      name: ''
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


  render() {
    return (
      <div className="wrapper">
        <div className="App">
          <div className="left">
            <Monthly monthMinus={this.monthMinus} {...this.state} />
            <Total />
          </div>
          <List />
        </div>
          {
            this.state.modalOpen ?
              <Modal
                onTextChange={text => this.setState({
                  event: {
                    name: text
                  }
                })} /> :
              null
          }
      </div>
    );
  }
}

export default App;
