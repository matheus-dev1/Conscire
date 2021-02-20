/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import Axios from 'axios';

import './styles.css'

import CardMoodle from '../../components/CardMoodle'

function Moodle() {

    
const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)

   
    if(toggle && nav && bodypd && headerpd){
        toggle.addEventListener('click', ()=>{
          
            nav.classList.toggle('show')
          
            toggle.classList.toggle('bx-x')
        
            bodypd.classList.toggle('body-pd')
     
            headerpd.classList.toggle('body-pd')
        })
    }
}

showNavbar('header-toggle','nav-bar','body-pd','header')


const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    if(linkColor){
        linkColor.forEach(l=> l.classList.remove('active'))
        this.classList.add('active')
    }
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))

    const[nome, Setnome] = useState('');

    const logout = ()=>{
        const token = localStorage.getItem('token')
        if(token != null){
            localStorage.removeItem('token')
            window.location.assign("http://localhost:3000/")
        }
    }

    window.onload = ()=>{
        Axios.get("http://localhost:5000/isUserAuth", {
            headers:{
                "x-acess-token": localStorage.getItem('token'),
            },
        }).then((response)=>{
            if(response.data != null || response.data != undefined){
                console.log(response.data)
                Setnome(response.data)
            }
        })
    }

    return (
        <>
        <body id="body-pd">
            <header class="header" id="header">
                <div class="header__toggle">
                    <i class='bx bx-menu' id="header-toggle"></i>
                </div>

                <div class="header__img">
                    <img src="" alt=""/>
                </div>
            </header>

        <div class="l-navbar" id="nav-bar">
            <nav class="nav">
                <div>
                    <a href="#" class="nav__logo">
                        <i class='bx bx-layer nav__logo-icon'></i>
                        <span class="nav__logo-name">Conscire</span>
                    </a>

                    <div class="nav__list">
                        <a href="#" class="nav__link active">
                        <i class='bx bx-grid-alt nav__icon' ></i>
                            <span class="nav__name">Painel Geral</span>
                        </a>

                        <a href="#" class="nav__link">
                            <i class='bx bx-user nav__icon' ></i>
                            <span class="nav__name">Perfil</span>
                        </a>
                        
                        <a href="." class="nav__link">
                            <i class='bx bx-brain nav__icon' ></i>
                            <span class="nav__name">Quiz</span>
                        </a>

                        <a href="" class="nav__link">
                            <i class='bx bx-brain nav__icon' ></i>
                            <span class="nav__name">História das bedidas</span>
                        </a>

                        <a href="./audit.php" class="nav__link">
                            <i class='bx bx-brain nav__icon' ></i>
                            <span class="nav__name">Teste Audit</span>
                        </a>

                        <a href="#" class="nav__link">
                            <i class='bx bx-trophy nav__icon' ></i>
                            <span class="nav__name" >Resultados</span>
                        </a>


                    </div>
                </div>

                <a href="#" class="nav__link">
                    <i class='bx bx-log-out nav__icon' ></i>
                    <span class="nav__name" onClick={logout} >Sair</span>

                <a href="" class="nav__link"/>
                    <i class='bx bx-log-out nav__icon' ></i>
                    <span class="nav__name"></span>
                </a>
            </nav>
        </div>

        <div className="container">
            <h3>{nome}</h3>
            <div className="row" >

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
    </body>
    </>
    )
}

export default Moodle