import React from 'react'
import {useEffect, useState} from 'react'; 
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import './styles.css'

function ResultadoAudit() {
    const [erros, setErros] = useState([]);
    const [statusErro, setStatusErro] = useState(false);
    useEffect(() => {
        async function fetchData(){
            const url =  "http://localhost:5000/audit/retorna"; 
            const response = await fetch(url);
            setErros(await response.json());
        }fetchData();    
      }, []);
  
    return (
        <>
            <Header />
                <div class="text-center text-dark py-3"> <h4 > Resultado Audit </h4> 
                    <div >          
                        {erros.map((item) =>{
                            return(
                            statusErro &&  <div class="alert alert-success mx-auto mt-4 w-75" role="alert">{item}</div>
                            )            
                        })}
                    </div>
                </div>
            <Footer />
        </>
    )
}

export default ResultadoAudit
