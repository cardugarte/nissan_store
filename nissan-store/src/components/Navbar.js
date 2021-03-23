import React from 'react';
import { Link } from 'react-router-dom';

import MenuBurger from '../components/menu-burger';
import Searchbar from '../components/Searchbar';
import logoNissan from '../images/Nissan-Logo.png';
import '../Styles/Navbar.css';
import '../Styles/responsive/NavBarResponsive.css';

function Navbar() {
  return (
    <div className="d-flex">
      <Link to="/">
        <img className="navbar__logo" src={logoNissan} alt="Logo de Nissan"/>
      </Link>
      <div className="navbar__menuburger">
        <MenuBurger />
      </div>
      <div className="d-flex navbar__content--items">
        <ul className="d-flex list-unstyled navbar__menu">
          <li><Link to="/autos">Vehículos</Link></li>
          <li><Link to="/">Descubrí Nissan</Link></li>
        </ul>
        <div>
          <Searchbar />
        </div>
      </div>
    </div>
  );
}

export default Navbar;