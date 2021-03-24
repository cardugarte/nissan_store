import React from 'react';

import { Facebook } from 'react-bootstrap-icons';
import { Instagram } from 'react-bootstrap-icons';
import { Twitter } from 'react-bootstrap-icons';
import { Youtube } from 'react-bootstrap-icons';
import { InfoCircle } from 'react-bootstrap-icons';
import '../Styles/Footer.css';
import '../Styles/responsive/FooterResponsive.css';

class Footer extends React.Component {
  render() {
    return(
      <footer>
        <div className="container">
          <h2><span className="Footer__title--bold">Nissan.</span> innovation that excites.</h2>
        </div>
        <div className="footer__container--list container d-flex justify-content-between">
          <div>
            <ul className="list-unstyled">
              <li><a href="/" target="_blank">{"Cotización de vehículos".toUpperCase()}</a></li>
              <li><a href="/" target="_blank"><InfoCircle color="white" size={14} /><span className="footer__info--text">Información legal</span></a></li>
            </ul>
          </div>
          <div className="d-flex">
            <ul className="list-unstyled">
              <li><a href="/" target="_blank">{"Ralitor s.a".toUpperCase()}</a></li>
              <li><a href="https://nissan.com.uy">nissan.com.uy</a></li>
              <li><a href="/" target="_blank">Políticas de Cookies</a></li>
            </ul>
          </div>
          <div>
            <ul className="list-unstyled">
              <li><a href="/" target="_blank">{"Ayuda al cliente".toUpperCase()}</a></li>
              <li><a href="/" target="_blank">Políticas de Privacidad</a></li>
            </ul>
          </div>
          <div className="footer__social--container">
            <ul className="list-unstyled">
              <li><a href="/" target="_blank">{"Nissan Social".toUpperCase()}</a></li>
            </ul>
            <ul className="footer__social--list list-unstyled d-flex">
            <li><a href="/" target="_blank"><Facebook color="white" size={15} /></a></li>
            <li><a href="/" target="_blank"><Instagram color="white" size={15} /></a></li>
            <li><a href="/" target="_blank"><Twitter color="white" size={15} /></a></li>
            <li><a href="/" target="_blank"><Youtube color="white" size={15} /></a></li>
            </ul>
          </div>
        </div>
        <div className="footer__age">
        <p className="container">© 2021 {"Simplicar".toUpperCase()}. Todos los derechos reservados</p>
        </div>
      </footer>
    )
  }
}

export default Footer;