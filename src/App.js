import './App.css';
import Main from './components/main/Main';
import Nav from './components/nav/Nav';
import Quote from './components/quote/Quote';
import Section from './components/section/Section';
import Footer from './components/footer/Footer';
import Starting from './components/starting/Starting';
import React from 'react';

class App extends React.Component {
  render() {
    return (   
      <div>
      <Nav />
      <Main />
      <Quote />
      <Section />
      <Starting />
      <Footer />
      </div>
    );
  }
  
}

export default App;
