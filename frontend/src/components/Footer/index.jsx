import React from "react";
import {Link} from "react-router-dom";
import './styles.css';

function Footer(){
    let Year = new Date();
    return (
    <footer className="text-white text-center text-lg-start">
    {/* Grid container - Todo o footer */}
    <div className="container p-4">
        {/* Grid row - Linha do Footer, onde contem todas as colunas onde cada coluna possui o texto sobre e os links*/}
        <div className="row">
        {/* Inicio - Grid column - Coluna onde possui texto sobre o site.*/}
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase">CONSCIRE</h5>
                <p class="text-white">
                O site Conscire esta sendo desenvolvido como projeto em grupo do Recode Pro. <br />
                E nos somos do Squad - 5 - SPT1 <br />
                As tecnologicas e usada foram: HTML, CSS, JS, React.JS, PHP, Node.js, MySQL
                <br /><br />
                É um site de educacao sobre bebidas alcoolicas onde o nosso publico alvo e o jovem em vulnerabilidade social.
                </p>
            </div>
        {/* Fim - Grid column */}

        {/* Inicio - Grid column - Coluna onde contem os links de redes socias do projeto. */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Rede Sociais</h5>

                <ul className="list-unstyled mb-0">
                <li>
                    <a href="#!" className="text-white">Facebook</a>
                </li>
                <li>
                    <a href="#!" className="text-white">WhatsApp</a>
                </li>
                <li>
                    <a href="#!" className="text-white">Instagram</a>
                </li>
                <li>
                    <a href="#!" className="text-white">YouTube</a>
                </li>
                </ul>
            </div>
        {/* Fim - Grid column*/}

        {/* Inicio - Grid column - Segunda coluna onde contem os links de redes socias do projeto. */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-0">Suporte</h5>

                <ul className="list-unstyled">
                <li>
                    <a href="#!" className="text-white">Forum</a>
                </li>
                <li>
                    <a href="#!" className="text-white">Feedback</a>
                </li>
                <li>
                    <a href="#!" className="text-white">Fale Conosco</a>
                </li>
                <li>
                    <a href="#!" className="text-white">Agendamento</a>
                </li>
                </ul>
            </div>
        {/* Fim - Grid column */}
        </div>
        {/* Fim - Grid row */}
    </div>
    {/* Fim - Grid container */}

    {/* Inicio - Copyright */}
    <div className="text-center p-3">
        © Conscire - Todos os Direitos Reservados - {Year.getFullYear()} - 
        <a className="text-white" href="#"> www.conscire.com.br</a>
    </div>
    {/* Fim - sCopyright */}
    </footer>
    );
}

export default Footer;