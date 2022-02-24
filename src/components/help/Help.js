import React, { Component } from 'react'
import '../help/Help.css'
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
export default class Help extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className='sorry'>
<h1 className='sorry-about'>Данная страница еще в разработке,приносим свои извенения!</h1>
        </div>
        <Footer />
      </div>
    )
  }
}
