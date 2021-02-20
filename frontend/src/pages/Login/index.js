/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

import './styles.css'

function Login() {
    return (
        <>
        <Header /> 
<section className="form my-4 mt-5 pt-5 mx-5">
    <div className="container ">
        <div className="row roww no-gutters">
            <div className="col-lg-5">
                <img src={require('../../assets/images/login.png').default} className="img-fluid" alt=""/>  
            </div>
            <div className="col-lg-7 px-5 pt-5">
                <img id="logo" src={require('../../assets/images/logo.png').default} alt="Conscire"/>
                {/*  */}
                <h5 className= "my-3 p-2">Entre na sua conta</h5>
                
                <form action='../Back-end/php/login_usuario.php' method='POST'>
                    <div className="form-row">
                        <div className="col-lg-7">
                            <input type="email" name="email" placeholder="Seu email aqui" className="form-control my-3 p-4"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-lg-7">
                            <input type="password" name="senha" placeholder="********" className="form-control my-3 p-4"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-lg-7">
                            <button type="submit" className="btn1 mt-3 mb-5">Login</button>
                        </div>
                    </div>
                    <p>Não possui uma conta?<br/> <Link to="/cadastro">Registre-se aqui</Link></p>
                    <p><Link to="/">Voltar para Conscire</Link></p>
                </form>
            </div>
        </div>
    </div>
</section>
<Footer /> 
        </>
    )
}

export default Login