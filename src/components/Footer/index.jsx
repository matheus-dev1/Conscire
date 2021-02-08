/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import './styles.css'

function Footer() {
    return(
        <div class="footer-container">
            <div class="footer">
                <div class="footer-heading footer-1">
                    <h2>O projeto</h2>
                    <a href="#">Quem somos</a>
                    <a href="#">termos de servicos</a>
                    <a href="#">contato</a>
                </div>
                <div class="footer-heading footer-1">
                    <h2>Contate-nos</h2>
                    <a href="#">Quem somos</a>
                    <a href="#">termos de servicos</a>
                    <a href="#">contato</a>
                </div>
                <div class="footer-heading footer-3">
                    <h2>Social media</h2>
                    <a href="#">Instragram</a>
                    <a href="#">Facebook</a>
                    <a href="#">Discord</a>
                </div>
                <div class="footer-email-form">
                    <h2>Assine nossos e-mails!</h2>
                    <input type="email" placeholder="Escreva seu email aqui" id="footer-email" />
                    <input type="submit" value="Cadastre-se" id="footer-email-btn" />
                </div>
            </div>
        </div>
    )
}

export default Footer