import React from 'react';
import '../../../styles/login/Celslide.scss'

export default function Celside() {
    return(
        <div className="instagram-phone">
            <img className="bg" src="./img/phone.png" alt="celular" />
            <div className="slide">
                <img src="./img/insta-1.jpg" alt="Foto" />
                <img src="./img/insta-2.jpg" alt="Foto" />
                <img src="./img/insta-3.jpg" alt="Foto" />
                <img src="./img/insta-4.jpg" alt="Foto" />
                <img src="./img/insta-5.jpg" alt="Foto" />
            </div>
        </div>
    );
}