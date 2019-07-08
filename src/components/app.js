import React, { Component } from 'react';
import moment from "moment";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Dustin Searle Portfolio</h1>
        <div>
          {moment().subtract(10, 'days').calendar()}
        </div>
      </div>
    );
  }
}