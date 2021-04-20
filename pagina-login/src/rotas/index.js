import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PaginaLogin from '../paginas/PaginaLogin';
import PaginaFeed from '../paginas/PaginaFeed';

const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ PaginaLogin } />
            <Route exact path='/feed' component={ PaginaFeed } />
        </Switch>
    </BrowserRouter>
);

export default Rotas;