import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PaginaLogin from '../paginas/PaginaLogin';

const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ PaginaLogin } />
        </Switch>
    </BrowserRouter>
);

export default Rotas;