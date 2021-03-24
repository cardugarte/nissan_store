import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GetData from '../components/getData';
import '../Styles/listCars.css';
import '../Styles/responsive/ListCarsResponsive.css';

class listCars extends React.Component {
  render() {
    return(
      <div>
        <Navbar />
        <div className="list__container">
        <h1 className="list__title font-weight-bold">{"¿Cuál va a ser tu próximo Nissan?".toUpperCase()}</h1>
        </div>
        <p className="list__counter container">{`7 ${"vehículos".toUpperCase()}`}</p>
        <div className="list__filter--container container d-flex justify-content-between">
          <div className="filter__container--left">
            <button className="filter__bodywork btn btn-outline-primary dropdown-toggle">{"Carrosería".toUpperCase()}</button>
            <button className="filter__model btn btn-outline-primary dropdown-toggle">{"Modelo".toUpperCase()}</button>
            <button className="filter__price btn btn-outline-primary dropdown-toggle">{"Precio".toUpperCase()}</button>
          </div>
          <div className="list__filter--right">
            <span className="filter__text">{"Ordenar:".toUpperCase()}</span>
            <button className="filter__order btn btn-outline-primary dropdown-toggle">{"Precio más bajo".toUpperCase()}</button>
          </div>
        </div>
        <GetData />
        <div className="list__terms container">
          <p>*Los precios expuestos en este catálogo son expresados en dólares americanos. Los mismos incluyen IVA y podrían variar en función del modelo y/o versión elegida. El precio por unidad reflejado en este catálogo refiere a la unidad de versión más económica por cada modelo. RALITOR S.A se reserva el derecho de modificar y actualizar los mismos en cualquier momento. Es responsabilidad del cliente confirmar al momento de su compra, el precio final que aparece en el catálogo. No se incluyen gastos de mantenimiento ni cualquier tipo de costo municipal, así como tampoco gastos de traslados, fletes o seguros del vehículo. No incluye costos de instalación de accesorios. </p>
        </div>
        <Footer />
      </div>
    )
  }
}

export default listCars;