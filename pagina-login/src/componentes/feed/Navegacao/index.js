import React from 'react';
import Menu from '../Menu';

import '../../../styles/feed/Navegacao.scss';

export default function Navegacao() {
    return(
    <div className='navigation'>
        <div className='container'>
            <img className='logo' src='./img/instagramLogo.png' alt='instagram logo' />
            <div className='search'>
                <img className='searchIcon' src='./img/searchIcon.png' alt='search icon' />
                <span className='searchText'>Search</span>
            </div>
            <Menu />
        </div>
    </div>
    );
}