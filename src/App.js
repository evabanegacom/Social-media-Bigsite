import React, {Component} from 'react'
import Navigation from './Components/Navigation'
import {Routes, Route } from 'react-router-dom'; // Import BrowserRouter as Router
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Post from './Components/Post';

class App extends Component {

  render () {
    return(
    <div className="App">
      <Navigation />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/posts/:id" element={< Post />} />

        </Routes>
    
    </div>
    )
  
}
}

export default App;
