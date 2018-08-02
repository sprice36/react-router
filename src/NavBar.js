import React from 'react';
import {Route, Link} from 'react-router-dom';

const NavBar = (props) => {
 return (
    <ul>
    <li><Link to="/">Landing</Link></li>
     <li><Link to="/home">Home</Link></li>
     <li><Link to="/about">About</Link></li>
     <li><Link to="/cats">Cats</Link></li>
   </ul>
 );
}


export default NavBar;