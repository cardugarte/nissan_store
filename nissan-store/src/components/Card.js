import React from 'react';
import { Link } from 'react-router-dom';

import { ArrowRight } from 'react-bootstrap-icons';
import '../Styles/Card.css';
import '../Styles/responsive/CardResponsive.css';

class Card extends React.Component {
  render() {
    return(
      <div className="container-fluid">
        <ul className="row">
          {this.props.cars.results.map((car) => {
            return (
              <li className="card__item list-unstyled col-4" key={car.id}>
                <img className="card__img" src={`https://s3.sa-east-1.amazonaws.com/simplimotos-stg.com/${car.gallery[1].medium}`} alt="logo de auto"/>
                <h4 className="card__title">{car.model}</h4>
                <div className="card__price--container container d-flex justify-content-between">
                  <span className="card__price">{"Precio desde".toUpperCase()}</span>
                  <span className="card__amount">{`${car.currency.toUpperCase()} `}{car.amount}</span>
                </div>
                <div className="card__details--container">
                  <Link className="card__link d-flex justify-content-between" to={`/detalle/${car.slug}`}>{"Ver detalles de modelo".toUpperCase()} <ArrowRight color="crimson" size={23} /></Link>
                  
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