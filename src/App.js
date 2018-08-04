import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarKu from './components/Header';
import JumbotronKu from './components/Jumbotron';
import Kajian from './components/contents/Kajian';
import Kilat from './components/contents/Kilat';
import Banner from './components/contents/Banner';
import Mondok from './components/contents/Mondok';
import Sponsor from './components/contents/Sponsor';
import Contact from './components/Footer/Contact';
import Footer from './components/Footer/Footer';
class App extends Component {
  render() {
    return (
      <div>
        <NavbarKu />
        <JumbotronKu />
        <Kajian />
        <Kilat />
        <Banner />
        <Mondok />
        <Sponsor />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
