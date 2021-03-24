import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import listCars from '../pages/listCars';
import error404 from '../pages/error404';

function App() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/autos" component={listCars} />
        <Route component={error404} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;