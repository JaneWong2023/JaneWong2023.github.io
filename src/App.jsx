import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
    </div>
  );
};

export default App;
