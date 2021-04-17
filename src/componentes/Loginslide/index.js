import React from 'react';
import './styles.css'

export default function Loginslide() {
    return(
        <div className="instragram-login">
                <div className="grupo">
                    <img src="./img/instagram-logo.png" className="instagram-logo" alt="instagram-logo" />

                    <div className="submit">
                        <input type="email" placeholder="Telefone, nome de usuário ou email" />
                        <input type="password" placeholder="Senha" />
                    </div>

                    <button className="button-login">Entrar</button>

                    <div className="alternative">
                        <span>ou</span>
                    </div>

                    <a id="text" href="#"><span><i className="fab fa-facebook-square"></i>Entrar com Facebook</span></a>
                    <a href="#" className="instagram-password">Esqueceu a senha?</a>
                </div>
                <div className="grupo">
                    <p className="outro-usuario">Não tem uma conta? <a href="#">Cadastre-se</a></p>
                </div>
                <div className="get-the-app">
                    <p className="get-app">Obtenha o aplicativo</p>
                    <div className="download">
                        <a href="#" className="app-download"></a>
                        <a href="#" className="app-download"></a>
                    </div>
                </div>
            </div>
    );
}