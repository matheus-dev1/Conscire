/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

// import './styles.css'

function Cadastro() {
    return (
        <>
            <Header />
                <section class="form center my-4 mt-5 pt-5 mx-5">
                    <div class="container">
                        <div class="row roww no-gutters">
                        <div class="col-lg-5">
                        <img src={require('../../assets/images/login.png').default} class="img-fluid" alt=""/>  
                    </div>
                    <div class="col-lg-7 px-5 pt-5">
                    <img id="logo" src={require('../../assets/images/logo.png').default} alt="Conscire"/>
                    <h5 class= "my-3 p-2">Entre na sua conta</h5>      
                
                    <form action="#" method="POST">
                        <div class="form-row">
                            <div class="col-lg-7">
                            <input type="text" id="nome" name="nome" placeholder="Nome Completo" class="form-control my-3 p-4"/>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="col-lg-7">
                        <input type="email" id="email" name="email" placeholder="Seu email aqui" class="form-control my-3 p-4"/>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="col-lg-7">
                        <input type="password" name="senha" id="senha" placeholder="Digite uma senha" class="form-control my-3 p-4"/>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="col-lg-7">
                        <input type="password" name="confirme" placeholder="Confirme a senha" class="form-control my-3 p-4"/>
                        </div>
                    </div>

                    <div class="form-row">
                    <div class="col-lg-7">
                    <button type="submit" class="btn1 mt-3 mb-5">Cadastrar</button>
                    </div>
                    </div>

                    <p>
                        Já possui uma conta? <br/> <a href="#"> Faca o login aqui</a>
                    </p>

                    </form>
                    </div>
                    </div>
                    </div>
                </section>
            <Footer />
        </>
    )
}

export default Cadastro