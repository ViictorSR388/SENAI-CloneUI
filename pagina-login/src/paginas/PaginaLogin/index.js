import React from 'react';

import '../../styles/login/PaginaLogin.scss';

import Celslide from '../../componentes/login/Celslide';
import Loginslide from '../../componentes/login/Loginslide';

export default function PaginaLogin() {
    return(
        <div className="instagram-wrapper">
            <Celslide />
            <Loginslide />
        </div>
    );
}