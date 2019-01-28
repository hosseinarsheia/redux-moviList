import React, { Component } from 'react';
import './App.css';
import MoveiList from './components/MoveiList'
import MovieDetails from './components/MovieDetails'

class App extends Component {
  render() {
    return (
      <div className="row">
        <div className='col-6'><MoveiList /></div>
        <div className='col-6 mt-5'><MovieDetails /></div>
      </div>
    );
  }
}

export default App;
