import React from 'react';

import Searchbar from '../components/Searchbar';
import logoNissan from '../images/Nissan-Logo.png';
import '../Styles/Navbar.css';

function Navbar() {
  return (
    <div className="d-flex">
      <a href="/">
        <img className="navbar__logo" src={logoNissan} alt="Logo de Nissan"/>
      </a>
      <div className="d-flex navbar__content--items">
        <ul className="d-flex list-unstyled navbar__menu">
          <li><a href="#">Vehículos</a></li>
          <li><a href="#">Descubrí Nissan</a></li>
        </ul>
        <div>
          <Searchbar />
        </div>
      </div>
    </div>
  );
}

export default Navbar;