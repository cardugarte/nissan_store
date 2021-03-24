import React from 'react';

import Navbar from '../components/Navbar';
import Button from '../components/Button.js';
import Footer from '../components/Footer';
import '../Styles/Home.css';
import '../Styles/responsive/HomeResponsive.css';


class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="hero__container">
          <div className="hero__back">
            <div>
              <Navbar />
            </div>
            <div className="hero__group">
              <h1 className="hero__title font-weight-bold">{"Ahora es online".toUpperCase()}</h1>
              <p className="hero__text">Con Nissan Store podés acceder a tu nuevo 0km con todos los servicios asociados desde la comodidad de tu sofá <br/> Probanos!</p>
              <Button />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home;