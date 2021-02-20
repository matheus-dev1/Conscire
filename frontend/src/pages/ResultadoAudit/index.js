import React from 'react'
import {useEffect, useState} from 'react'; 
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import './styles.css'

function ResultadoAudit() {
    const [result, setResult] = useState([]);
    const [statusResult, setStatusResult] = useState(false);
   
    useEffect(() => {
        async function fetchData(){
            const url =  "http://localhost:5000/audit/retorna"; 
            const response = await fetch(url);
            setResult(await response.json());
        }fetchData();    
      }, []);
     

      setTimeout(() => {
        setStatusResult(true);
      }, 50000);


  
    return (
        <>
            <Header />
            <br /> <br /> <br /> <br /> <br /> <br /> <br />
                <div class="text-center text-dark py-3"> <h4 > Resultado Audit </h4> 
                <div >          
                    {
                        statusResult &&  <div class="alert alert-success mx-auto mt-4 w-75" role="alert">
                        <p>{result}</p>
                    </div>
                    }
                    </div>
                </div>
                
            <Footer />
        </>
    )
}

export default ResultadoAudit
