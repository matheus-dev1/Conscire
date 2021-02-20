import React from 'react'
import {useState, useEffect} from 'react';  
import Axios from "axios";
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

function Contato() {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [msg, setMsg] = useState("");
    const [erros, setErros] = useState([]);
    const [statusErro, setStatusErro] = useState(false);
    const [mensagens, setMensagens ] = useState([]);
    const v = []

    useEffect(() => {
      async function fetchData(){
          const url =  "http://localhost:5000/comentarios/retorna"; 
          const response = await fetch(url);
          setMensagens(await response.json());
      }fetchData();    
    }, []);

    const mensagem = ()=>{
        Axios.post("http://localhost:5000/comentarios/envia", {
            nome: nome,
            sobrenome: sobrenome,
            msg: msg
        }).then((response) => {
          if(response.data.message){
            v.push(response.data.message)
            setStatusErro(true);
        }else{
          for(var i=0;i<response.data.validacao.errors.length;i++){
            if(!response.data.auth){
                v.push(response.data.validacao.errors[i].msg)
                setStatusErro(true);
            }
          }
       }
        setErros(v)
    })
        setTimeout(() => {
            setStatusErro(false);
          }, 10000);

      setNome('');
      setSobrenome('');
      setMsg('');
    }

    return(
      <div>
        <Header />
          <section className="contact">
            <div className="container py-5">
              <div className="row">
                <div className="col-lg-6 mx-auto">
                  <div className="card">
                    <div className="card-body">
                      <div className="col-lg-12">
                        <div className="head text-center text-white py-3">
                          <h3>Contato</h3>
                        </div>
                      </div>
                    </div>

                    {erros.map((item) =>{
                      return(
                        statusErro &&  <div className="alert alert-danger mx-auto mt-4 w-75" role="alert">{item}</div>
                      )            
                    })}

                    <div>
                      <div className="form p-3">
                        <div className="form-row my-5">

                          <div className="col-lg-6">
                            <input type="text" className="effect-1" value={nome} onChange={event => setNome(event.target.value)} pattern="^[^-\s][a-zA-ZÀ-ú ]*" placeholder="Nome" name='nome' required/>
                            <span className="Focus-border"></span>
                          </div>

                          <div className="col-lg-6">
                            <input type="text" className="effect-1"  name='sobrenome' value={sobrenome} onChange={event => setSobrenome(event.target.value)} pattern="^[^-\s][a-zA-ZÀ-ú ]*" placeholder="Sobrenome" required/>
                            <span className="Focus-border"></span>
                          </div>
                        </div>

                        <div className="form-row pt-5">
                          <div className="col-lg-12">
                            <textarea classNameName="text-center" name="msg" value={msg} onChange={event => setMsg(event.target.value)} cols="60" rows="4" placeholder="Digite uma mensagem aqui..." required></textarea>
                            <span className="Focus-border"></span>
                          </div>
                      </div>

                        <div className="form-row pt-4">
                          <div className="col-lg-6">
                            <p className="text-dark"><input type="checkbox"/> Não sou um robô </p>
                            <p><Link to="/"> Voltar para Conscire</Link></p>
                        </div>

                      <div className= "offset-2 col-lg-4">
                        <button onClick={mensagem} className="btn1">ENVIAR</button>
                      </div>
                  </div>
                  
                </div>

                  </div>
                          <p className="text-center text-dark">Entre em contato conosco: <br/>
                          Telefone: (11)3656-5562 <br/>
                          Endereço: Rua Conscire, 569 <br/>
                          São Paulo - SP </p>
                      </div>
                  </div>
              </div>
            </div>
           

          </section>
          <div className="text-center text-dark py-3"> <h4 > Mensagens </h4> </div>
            <div >          
                {mensagens.map((item) =>{
                    return(
                      <div className="alert alert-success mx-auto mt-4 w-75" key={item.id}>
                          <hr/><hr/>
                          <div>
                              Data: {item.data}
                          </div>
                          <div>
                              Cliente {item.nome} {item.sobrenome} escreveu: {item.msg}
                          </div>
                          <hr/><hr/>
                      </div>
                    )            
                })}
            </div>
      <Footer />
    </div>
  )
}
export default Contato
