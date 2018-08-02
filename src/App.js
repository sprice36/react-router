import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Route, Link} from 'react-router-dom';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
         
        <NavBar /> 
        <Route path="/" exact={true} component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} /> 
        <Route path="/cats" component={Cats} />
        <Route path="/cats/:cat"  component={SpecificCat}/>
      
      </div>
    );
  }
}

const Home = (props) => {
  return (
    <div> 
      <h1>Home</h1>
      </div>
  );
}

const About = (props) => {
  return (
    <div> 
      <h1>About</h1>
      </div>
  );
}

const foramtAsLink = (toUrl, name) => {
  return (
    <li><Link to={toUrl}>{name}</Link></li>
  );
}

const Cats = (props) => {
   let allCats = [
     'oakley',
     'milla',
     'ryan'  
   ];


  return (
    <div> 
      <h1>Cats</h1>
      <ul>
        {allCats.map(cat => foramtAsLink(`${props.match.url}/${cat}`, cat))}
    
        </ul>
      </div>
  );
}

const Landing = (props) => {
  return (
    <div> 
      <h1>Landing page</h1>
      </div>
  );
}

const SpecificCat = (props) => {
  return (
    <div> 
      <h1> a specificCat</h1>
      <h2> {props.match.params.cat}</h2>
      </div>  
);
}


export default App;
