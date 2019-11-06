import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Formulario from './pages/Formulario';
import Lista from './pages/Lista';

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Formulario} />
        <Route path="/lista" component={Lista} />
      </Switch>
    </BrowserRouter>
  )
}