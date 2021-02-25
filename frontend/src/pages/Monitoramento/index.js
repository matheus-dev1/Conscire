//Códigos no backend, das APIs DO FOMULÁRIO E DA TABELA 

import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import  {Chart}  from "react-google-charts";

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import './styles.css'

function Monitoramento() {
   

    Axios.defaults.withCredentials = true;

    
    const [q1, setQ1] = useState('');
    const [q2, setQ2] = useState('');
    const [q3, setQ3] = useState('');

    const [erros, setErros] = useState([]);
    const [statusErro, setStatusErro] = useState(false);
    const [mensagens, setMensagens ] = useState([]);
    const [render, setRender] = useState(false);
    const v =[]

     useEffect(() => {
        async function fetchData(){
            const url =  "http://localhost:5000/monitoramento/retorna"; 
            const response = await fetch(url);
            setMensagens(await response.json());
        }fetchData();    
      }, [render]);

    const registerMonitoramento = ()=>{
        Axios.post("http://localhost:5000/monitoramento/register", {
            q1: q1,
            q2: q2,
            q3: q3	
        }).then((response) => {
            if(response.data.message){
                v.push(response.data.message)
                setStatusErro(true); 
           }
            setErros(JSON.stringify(v))
          })
          setRender(!render);  
          setTimeout(() => {
              setStatusErro(false);
              setRender(true);
            }, 50000);
            
          setQ1('');
          setQ2('');
          setQ3('');
        
    }
    const [options, setOptions] = useState({
        title: 'Estatísticas de monitoramento'
    })
    const [data, setData] = useState([
        
        ['Questões', 'Total'],
        ['1 – O quanto você gostou da nossa plataforma?', 50], 
        ['2 – Você aprendeu sobre bebidas alcoólicas em nossa plataforma?', 5],
        ['3 – Você considera que o teste Audit contribui para o conhecimento sobre seu consumo de bebidas alcoólicas?', 10],
    ])

    const [resaudit, setResaudit] = useState({
        title: 'Estatísticas de monitoramento'
    })
    const [zona, setZona] = useState([
        
        ['Questões', 'Total'],
        ['Zona I (<=7)', 50], 
        ['Zona II (>=8 e <=15)', 30], 
        ['Zona III (>=16 e <=19)', 20], 
        ['Zona IV (>=20)', 10]
    ])
    
    return (
        <div >
            <Header /> 
            <div className="container bg-light rounded mt-5 pt-5 backgroudAudit">
                <h3 className="display-3 text-center texto-m pt-5">Monitoramento</h3>
                
                
                {erros.map((item) =>{
                    return(
                    statusErro &&  <div className="alert alert-danger mx-auto mt-4 w-75" role="alert">{item}</div>
                    )            
                })}
                
                <hr className="my-4 bg-white"/>
                    <div className="form-group">
                        <div className="form-check texto-m">
                        <p className="texto-m">1 – O quanto você gostou da nossa plataforma?</p>
                        <input type="radio" name="q1" value="0"  required onChange={(e) =>{setQ1(e.target.value);}}/> Não gostei. <br />
                        <input type="radio" name="q1" value="1" required onChange={(e) =>{setQ1(e.target.value);}}/> Gostei, mas não indicaria para jovens. <br />
                        <input type="radio" name="q1" value="2" required onChange={(e) =>{setQ1(e.target.value);}}/> Gostei, indicaria para jovens. <br />
                    </div>
                    <br/>
                <div className="form-check texto-m">
                    <p className="texto-m">2 – Você aprendeu sobre bebidas alcoólicas em nossa plataforma?</p>
                    <input type="radio" name="q2" value="0" required onChange={(e) =>{setQ2(e.target.value);}}/> Não.<br/>
                    <input type="radio" name="q2" value="1" required onChange={(e) =>{setQ2(e.target.value);}}/> Sim,pouco.<br/>
                    <input type="radio" name="q2" value="2" required onChange={(e) =>{setQ2(e.target.value);}}/> Sim, muito.<br/>
                </div>
                <br/>
                <div className="form-check texto-m">
                    <p className="texto-m">3 – Você considera que o teste Audit contribui para o conhecimento sobre seu consumo de bebidas alcoólicas?</p>
                    <input type="radio" name="q3" value="0" required onChange={(e) =>{setQ3(e.target.value);}}/> Não. <br/>
                    <input type="radio" name="q3" value="1" required onChange={(e) =>{setQ3(e.target.value);}} /> Sim,pouco. <br/>
                    <input type="radio" name="q3" value="2" required onChange={(e) =>{setQ3(e.target.value);}} /> Sim, muito. <br/>
                </div>
                
            </div>
                <p align="center"> 
                    <button className="btn rounded btn-light m-1 p-1 bg-light text-dark rounded" onClick={registerMonitoramento}>Enviar</button>
                    <input className="btn rounded btn-light m-1 p-1 bg-light text-dark rounded" name="Submit" type="reset" value="Limpar"/>
                </p>
                <p>&nbsp;</p>
            </div>

            <div className="text-center text-dark py-3"> <h4 > Respostas sobre Nossa plataforma </h4> </div>
                <div  className="alert  py-0  my-0 ml-5 w-75" > 
                    <div  className="alert  p-0 py-0 pl-5 my-0 ml-5 " >     
                        <table border="1" >     
                            <tr >
                                <td  className="alert-primary" align="center" width='1200'>1 – O quanto você gostou da nossa plataforma? </td>
                                <td className="alert-primary" align="center" width='1200'>2 – Você aprendeu sobre bebidas alcoólicas em nossa plataforma? </td>
                                <td className="alert-primary" align="center" width='1200'>3 – Você considera que o teste Audit contribui para o conhecimento sobre seu consumo de bebidas alcoólicas?</td>
                            </tr>
                        </table> 
                    </div>
                    
                    {mensagens.map((item) =>{
                        return(
                        <div className="alert p-0 pl-5 my-0 ml-5 " role="alert" key={item.id}>
                            
                            {/* <hr/><hr/> */}
                            <table border="1" >
                                <tr>
                                    <td align="center" width='1200'> {item.q1} </td>
                                    <td align="center" width='1200'> {item.q2} </td>
                                    <td align="center" width='1200'>{ item.q3} </td>
                                </tr>
                            </table>   
                        </div>
                        )            
                    })}
                </div>

                <div className="App">
                    <div className="pl-5">
                        <Chart
                            width={'1000px'}
                            height={'600px'}
                            chartType="PieChart"
                            data={data}
                            options={options}
                        />
                    </div>
                </div>
                
                <div className="text-center text-dark py-3"> <h4 > Resultados do Teste Audit (qual o perfil de consumo de bebidas alcoólicas do público que está acessando nossa plataforma) </h4> </div>

                <div className="App"> 
                    <div className="pl-5">
                        <Chart
                            width={'900px'}
                            height={'300px'}
                            chartType="BarChart"
                            data={zona}
                            options={resaudit}
                        />
                    </div>
                </div>
            <Footer />
        </div> 
    )
}

export default Monitoramento





























