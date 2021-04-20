import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/login/Loginslide.scss';

export default function Loginslide() {
    return(
        <div className="instragram-login">
                <div className="grupo">
                    <img src="../../../../img/instagram-logo.png" className="instagram-logo" alt="instagram-logo" />

                    <div className="submit">
                        <input type="email" placeholder="Telefone, nome de usuário ou email" />
                        <input type="password" placeholder="Senha" />
                    </div>

                    <Link className="button-login" to="/feed">Entrar</Link>

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
                        <a href="https://apps.apple.com/br/app/instagram/id389801252" className="app-apple">
                            <img src="../../../../img/apple-botao.png" className="app-apple" alt="Apple"></img>
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.instagram.android&hl=pt_BR&gl=US" className="app-android">
                            <img src="../../../../img/google-botao.png" className="app-android" alt="Google"></img>
                        </a>
                    </div>
                </div>
            </div>
    );
}