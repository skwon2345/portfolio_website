import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import Documents from './components/pages/Documents'
import Contact from './components/pages/Contact'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/projects' exact component={Projects} />
        <Route path='/documents' exact component={Documents} />
        <Route path='/contact' exact component={Contact} />
      </Switch>

    </Router>
  );
}

export default App;
