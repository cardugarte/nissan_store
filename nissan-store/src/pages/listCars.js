import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GridCars from '../components/GridCars';
import '../Styles/listCars.css';

class listCars extends React.Component {
  render() {
    return(
      <div>
        <Navbar />
        <div className="list__container">
        <h1 className="list__title font-weight-bold">¿CUÁL VA A SER TU PRÓXIMO NISSAN?</h1>
        </div>
          <p className="list__counter container">7 VEHÍCULOS</p>
        <div className="list__filter--container container d-flex justify-content-between">
          <div className="filter__container--left">
            <button className="filter__bodywork btn btn-outline-primary dropdown-toggle">CARROCERÍA</button>
            <button className="filter__model btn btn-outline-primary dropdown-toggle">MODELO</button>
            <button className="filter__price btn btn-outline-primary dropdown-toggle">PRECIO</button>
          </div>
          <div className="list__filter--right">
            <span className="filter__text">ORDENAR:</span>
            <button className="filter__order btn btn-outline-primary dropdown-toggle">PRECIO MÁS BAJO</button>
          </div>
        </div>
        <GridCars />
        <div className="list__terms container">
          <p>*Los precios expuestos en este catálogo son expresados en dólares americanos. Los mismos incluyen IVA y podrían variar en función del modelo y/o versión elegida. El precio por unidad reflejado en este catálogo refiere a la unidad de versión más económica por cada modelo. RALITOR S.A se reserva el derecho de modificar y actualizar los mismos en cualquier momento. Es responsabilidad del cliente confirmar al momento de su compra, el precio final que aparece en el catálogo. No se incluyen gastos de mantenimiento ni cualquier tipo de costo municipal, así como tampoco gastos de traslados, fletes o seguros del vehículo. No incluye costos de instalación de accesorios. </p>
        </div>
        <Footer />
      </div>
    )
  }
}

export default listCars;