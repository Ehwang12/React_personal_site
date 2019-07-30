import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Work from './pages/Work';
import Contact from './pages/Contact';
import About from './pages/About';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="testBod">
        Working
        <div className="monTest">
        <BrowserRouter>
          <Route exact path="/" component={ Work } />
          <Route exact path="/work" component={ Work } />
          <Route exact path="/contact" component={ Contact } />
          <Route exact path="/about" component={ About } />
        </BrowserRouter>
        </div>
        
      </div>
    );
  }
}

export default App;
