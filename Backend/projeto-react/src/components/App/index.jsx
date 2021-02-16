//Dependencias e biblio:
import React, {useState} from 'react';

import Axios from 'axios';
//Componentes:
import Header from '../Header';
import Footer from '../Footer';
//CSS:
import './styles.css';

const App = () => {

    const [nameReg, setNameReg] = useState('');
    const [emailReg, setEmailReg] = useState('');
    const [senhaReg, setSenhaReg] = useState('');

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const [loginStatus, setLoginStatus] = useState(false);

    Axios.defaults.withCredentials = true;

    const register = ()=>{
        Axios.post("http://localhost:5000/register", {
            nome: nameReg,
            email: emailReg,
            senha: senhaReg
        }).then((Response) => {
            console.log(Response);
        })
    }

    const login = ()=>{
        Axios.post("http://localhost:5000/login", {
            email: email,
            senha: senha
        }).then((response) => {
            if(!response.data.auth){
                console.log(response.data.message);
                setLoginStatus(false)
            }else{
                localStorage.setItem("token", response.data.token)
                setLoginStatus(true);
                console.log(localStorage.getItem('token'))
            }
        })
    }

    /*useEffect(()=>{
        Axios.get("http://localhost:5000/login").then((response)=>{
            console.log(response)
            if(response.data.loggedIn === true){
                //setLoginStatus(response.data.user[0].EMAIL)
            }
            
        })
    }, []) */

    const userAuthenticated = () =>{
        Axios.get("http://localhost:5000/isUserAuth", {
            headers:{
                "x-acess-token": localStorage.getItem('token'),
            },
        }).then((response)=>{
            console.log(response)
        })
    }

    return(
        <>
            <Header />
            <main>
                <div className="registration">
                    <h1>Registro</h1>
                    
                    <input type="text"  placeholder="Insira seu nome completo" onChange={(e) =>{setNameReg(e.target.value);}}/>
                    <br/>
                    <input type="text"  placeholder="Insira seu e-mail" onChange={(e) =>{setEmailReg(e.target.value);}}/>
                    <br/>
                    <input type="text"  placeholder="Insira sua senha" onChange={(e) =>{setSenhaReg(e.target.value);}}/>
                    <br/>
                    <button onClick={register}>Registre-se</button>
                </div>



                <div className="login">
                    <h1>Login</h1>
                    <br/>
                    <input type="text"  placeholder="Insira seu e-mail" onChange={(e) =>{setEmail(e.target.value);}}/>
                    <br/>
                    <br/>
                    <input type="text"  placeholder="Insira sua senha" onChange={(e) =>{setSenha(e.target.value);}}/>
                    <br/>
                    <button onClick ={login}>Entre</button>
                </div>
                {loginStatus && (
                    <button onClick={userAuthenticated}> Cheque se você está autenticado</button>
                )}
            </main>
            <Footer />
        </>
    );
}

export default App;