/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import './styles.css'

import CardMoodle from '../../components/CardMoodle'

function Moodle() {
    return (
        <>
            {/* Barra de Navegacao */}
            <header className="header" id="header">
                <div className="header__toggle">
                    <i className='bx bx-menu' id="header-toggle"></i>
                </div>

                <div className="header__img">
                    <img src="" alt=""/>
                </div>
            </header>

            <div className="l-navbar" id="nav-bar">
                <nav className="nav">
                    <div>
                        <a href="#" className="nav__logo">
                            <i className='bx bx-layer nav__logo-icon'></i>
                            <span className="nav__logo-name">Conscire</span>
                        </a>

                    <div className="nav__list">
                        <a href="#" className="nav__link active">
                            <i className='bx bx-grid-alt nav__icon' ></i>
                            <span className="nav__name">Painel Geral</span>
                        </a>

                        <a href="#" className="nav__link">
                            <i className='bx bx-user nav__icon' ></i>
                            <span className="nav__name">Perfil</span>
                        </a>
                    
                        <a href="#" className="nav__link">
                            <i className='bx bx-brain nav__icon' ></i>
                            <span className="nav__name">Quiz</span>
                        </a>

                        <a href="#" className="nav__link">
                            <i className='bx bx-brain nav__icon' ></i>
                            <span className="nav__name">História das bedidas</span>
                        </a>

                        <a href="#" className="nav__link">
                            <i className='bx bx-brain nav__icon' ></i>
                            <span className="nav__name">Teste Audit</span>
                        </a>

                        <a href="#" className="nav__link">
                            <i className='bx bx-trophy nav__icon' ></i>
                            <span className="nav__name">Resultados</span>
                        </a>
                    </div>
                </div>

                <a href="#" className="nav__link">
                    <i className='bx bx-log-out nav__icon'></i>
                    <span className="nav__name">Sair</span>
                </a>

                <a href="#" className="nav__link">
                    <i className='bx bx-log-out nav__icon' ></i>
                    <span className="nav__name">Deletar conta</span>
                </a>
                
                </nav>
            </div>

        <div className="container">
            <div className="row">

            <CardMoodle 
            linkAdrress={"https://www.ted.com/talks/rod_phillips_a_brief_history_of_alcohol/transcript?language=pt-br#t-8168"}
            image={require("../../assets/images/historia-das-bebidas.png").default}
            description={"Você sabe como as bebidas alcoólicas surgiram? Aqui nesse vídeo, Rod Phillips explica essa história por meio de uma animacão. Venha conferir!"}
            title={"HISTÓRIA DAS BEBIDAS"}
            />

            <CardMoodle 
            linkAdrress={"#"}
            image={require("../../assets/images/quiz.png").default}
            description={"E ai, já tomou um gole de consciência no nosso site? Entao venha responder nosso Quiz, marcar muitos pontos e escalar nosso ranking!"}
            title={"QUIZ"}
            />

            <CardMoodle 
            linkAdrress={"#"}
            image={require("../../assets/images/teste-audit.png").default}
            description={"O AUDIT - Alcool Use Disorders Identification Test é um instrumento de avaliação desenvolvido pela Organização Mundial de Saúde (OMS)."}
            title={"TESTE AUDIT"}
            />

            <CardMoodle 
            linkAdrress={"#"}
            image={require("../../assets/images/efeitos-da-bebida.jpeg").default}
            description={"Você já se perguntou como o corpo reage ao álcool ingerido? A revista Mundo Estranho conta o que acontece em vários órgãos do nosso organismo."}
            title={"COMO O ORGANISMO REAGE AO ÁLCOOL?"}
            />

            <CardMoodle 
            linkAdrress={"https://cisa.org.br/index.php/sua-saude/informativos/artigo/item/248-influencias-das-midias-sociais-no-consumo-de-alcool-entre-adolescentes-e-jovens"}
            image={require("../../assets/images/influencia-das-bebidas.png").default}
            description={"Você acredita no poder da influência das mídias? Aqui você pode ver como as mídias sociais podem influenciar o comportamento dos jovens em relação às bebidas alcoólicas."}
            title={"MÍDIAS SOCIAIS E SUA INFLUÊNCIA"}
            />

            <CardMoodle 
            linkAdrress={"https://cisa.org.br/index.php/sua-saude/informativos/artigo/item/47-metabolismo-do-alcool"}
            image={require("../../assets/images/metabolismo-do-alcool.png").default}
            description={"Você sabia que da ingestão até ser eliminado, o álcool passa por diversas fases de metabolização dentro do nosso organismo?"}
            title={"METABOLISMO DO ÁLCOOL"}
            />

            </div>
        </div>
    </>
    )
}

export default Moodle