import React from 'react';
import { Link } from 'react-router-dom';

import { ArrowRight } from 'react-bootstrap-icons';
import '../Styles/Card.css';

class Card extends React.Component {
  render() {
    return(
      <div className="container">
        <ul className="row">
          {this.props.cars.results.map((car) => {
            return (
              <li className="card__item list-unstyled col-4" key={car.id}>
                <img src={car.gallery.medium} alt="logo de auto"/>
                <h4 className="card__title">{car.model}</h4>
                <div className="card__price--container container d-flex justify-content-between">
                  <span className="card__price">PRECIO DESDE:</span>
                  <span className="card__amount">{car.currency}{car.amount}</span>
                </div>
                <div className="card__details--container">
                  <Link className="card__link d-flex justify-content-between" to="/">VER DETALLES DE MODELO <ArrowRight color="crimson" size={25} /></Link>
                  
                </div>
                <p className="card__text">Imágenes meramente ilustrativas no reportando la realidad exacta, pudiendo existir variaciones en la percepción.</p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Card;