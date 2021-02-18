/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './styles.css'

function Header() {
    return(
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top JustifyHeader">
                    <a className="navbar-brand" href="">
                        <img className="logo" src={require("../../assets/images/logo.png").default} alt="Conscire" />
                    </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">                  
                    <li className="nav-item">
                        <a className="nav-link" href="">Sobre</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="">O que temos</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="">Contato</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="">Cadastre-se</a>
                    </li>
                    </ul>
                        <button className="btn btn-warning text-white btn-lg" type="submit">
                            <a className="text-light" href="#">Login</a>
                        </button>
                </div>
            </nav>
    )
}

export default Header