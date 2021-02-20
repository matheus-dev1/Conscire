/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import Axios from 'axios'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import './styles.css'

function Login() {
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [erros, setErros] = useState('');

    const [loginStatus, setLoginStatus] = useState(false);
    const [statusErro, setStatusErro] = useState(false);

    Axios.defaults.withCredentials = true;

    const login = ()=>{
        Axios.post("http://localhost:5000/login", {
            email: email,
            senha: senha
        }).then((response) => {
            if(!response.data.auth){
                console.log(response.data.message);
                setErros(response.data.message);
                setLoginStatus(false);
                setStatusErro(true);
            }else{
                localStorage.setItem("token", response.data.token)
                localStorage.setItem("email", response.data.results)
                setLoginStatus(true);
                console.log(localStorage.getItem('token'))
                console.log(response.data.results)
            }
        })
        setTimeout(() => {
            setStatusErro(false);
          }, 5000);

    }


    return (
        <>
        <Header /> 
<section class="form my-4 mt-5 pt-5 mx-5">
    <div class="container ">
        <div class="row roww no-gutters">
            <div class="col-lg-5">
                <img src={require('../../assets/images/login.png').default} class="img-fluid" alt=""/>  
            </div>
            <div class="col-lg-7 px-5 pt-5">
                <img id="logo" src={require('../../assets/images/logo.png').default} alt="Conscire"/>
                {/*  */}
                <h5 class= "my-3 p-2">Entre na sua conta</h5>
                    <div class="form-row">
                        <div class="col-lg-7">
                            <input type="email"  placeholder="Seu email aqui" class="form-control my-3 p-4" onChange={(e) =>{setEmail(e.target.value);}} />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-lg-7">
                            <input type="password" name="senha" placeholder="********" class="form-control my-3 p-4" onChange={(e) =>{setSenha(e.target.value);}} />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-lg-7">
                            <button onClick ={login} class="btn1 mt-3 mb-5 p-2">Login</button>
                        </div>
                    </div>
                    {
                        statusErro &&  <div class="alert alert-danger mx-auto mt-4 w-75" role="alert">
                        <p>{erros}</p>
                    </div>
                    }

                    {
                        loginStatus && window.location.assign("http://localhost:3000/moodle")
                    }

                    <p>Não possui uma conta?<br/> <a href="./#"> Registre-se aqui</a></p>
                    <p><a href="#"> Voltar para Conscire</a></p>
            </div>
        </div>
    </div>
</section>
<Footer /> 
        </>
    )
}

export default Login