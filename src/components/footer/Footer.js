import React, { Component } from 'react';
import '../footer/Footer.css';
import Logo from '../icons/CRYPTON.png'


export default class Footer extends Component {
  render() {
    return (
<footer className='footer'>
<div className="footer__copyright">
        <img className='logo' src={Logo} alt={Logo}></img>
        <p className="small text-muted mb-0">Crypton&nbsp; &copy; Copyrights. All rights reserved.</p>
    </div>
    </footer>
    );
  }
}
