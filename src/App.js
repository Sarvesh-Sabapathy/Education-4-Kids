import React from 'react';
import Navbar from './Components/Website Layout/Navigation Bar/NavBar';
import './App.css';
import Home from './Components/Pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Resources from './Components/Pages/Resources';
import AboutUs from './Components/Pages/AboutUs';
import EducationalTools from './Components/Pages/EducationalTools';
import ObjectsGame from './Components/Pages/ObjectsGame';
import MemoryGame from './Components/Pages/MemoryGame';
import DefinitionGame from './Components/Pages/DefinitionGame';

function App() {
  // Creates routes for different pages and navigation
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Resources' exact component={Resources} />
        <Route path='/About-Us' exact component={AboutUs} />
        <Route path='/Educational-Tools' exact component={EducationalTools} />
        <Route path='/Objects-Game' exact component={ObjectsGame} />
        <Route path='/Memory-Game' exact component={MemoryGame} />
        <Route path='/Definition-Game' exact component={DefinitionGame} />
      </Switch>
    </Router>
  );
}

export default App;