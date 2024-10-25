import React from 'react'
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';

export default function Route() {
  return (
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                        <Link to='/About'>About</Link>
                        <Link to='/Contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/About" element={<About />}/>
                <Route path="/Contact" element={<Contact />}/>
            </Routes>
        </div>
    </Router>
  )
}