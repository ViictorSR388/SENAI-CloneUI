import React from 'react';

import './styles.css';

import Celslide from '../../componentes/Celslide';
import Loginslide from '../../componentes/Loginslide';

export default function PaginaLogin() {
    return(
        <div className="instagram-wrapper">
            <Celslide />
            <Loginslide />
        </div>
    );
}