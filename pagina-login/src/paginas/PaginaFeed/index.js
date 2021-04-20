import React from 'react';
import Navegacao from '../../componentes/feed/Navegacao';
import Cards from '../../componentes/feed/Cards';
import Sidebar from '../../componentes/feed/Sidebar';

import '../../styles/feed/PaginaFeed.scss';

export default function PaginaFeed() {
    return(
        <div className="instagram-feed">
            <Navegacao />
            <main>
                <div className='container'>
                    <Cards />
                    <Sidebar />
                </div>
            </main>
        </div>
    );
}