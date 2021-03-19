import React from 'react';

import '../Styles/searchbar.css';

class Searchbar extends React.Component {
  render() {
    return (
      <div className="search__container d-flex">
        <span className="search__icon"></span>
        <input className="search__input form-control" type="text" placeholder="Buscar por modelo o vehículo"/>
      </div>
    )
  }
}

export default Searchbar;