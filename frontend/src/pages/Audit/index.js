/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';
import Axios from 'axios';

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import './styles.css'

function Audit() {
    Axios.defaults.withCredentials = true;

    
    const [q1, setQ1] = useState('');
    const [q2, setQ2] = useState('');
    const [q3, setQ3] = useState('');
    const [q4, setQ4] = useState('');
    const [q5, setQ5] = useState('');
    const [q6, setQ6] = useState('');
    const [q7, setQ7] = useState('');
    const [q8, setQ8] = useState('');
    const [q9, setQ9] = useState('');
    const [q10, setQ10] = useState('');
    const [email, SetEmail] = useState('');
    const [auth, setAuth] = useState(false)

    window.onload = ()=>{
        const email = localStorage.getItem('email')
        if(email != null){
            SetEmail(email)
        }
        console.log(email)
     }

    const registeraudit = ()=>{
        Axios.put("http://localhost:5000/audit/atualiza", {
        q1: q1,
	    q2: q2,
	    q3: q3,
	    q4: q4,
	    q5: q5,
	    q6: q6,
        q7: q7,
	    q8: q8,
	    q9: q9,
	    q10: q10,
        email: email,	
        }).then((Response) => {
            console.log(Response);
            setAuth(true);
        })
    }


    return (
        <>
        <Header /> 
            <div class="container bg-light rounded mt-5 pt-5 backgroudAudit">
                <h1 class="display-3 text-center texto-m pt-5">Teste AUDIT</h1>
                <p>O AUDIT foi desenvolvido para avaliar indivíduos quanto ao seu padrão do uso de álcool, sendo utilizado como instumento de rastreamento de comportamento de risco de consumo de bebidas alcoólicas. É importante destacar que ele não é um dignóstico completo.</p>
                <p>O principal objetivo é alertar, não apontar possíveis vícios ou doenças.</p>
                <p>É de extrema importância responder as 10 perguntas de acordo com seus hábitos de consumo, para que assim seja retornado um relatório mais apurado possível.</p>
                <p>Para mais informações sobre o Teste AUDIT, clique no botão abaixo:</p>
                <p class="texto-m">
                    <a class="text-dark btn btn-sm btn-light my-1" href="http://www.aberta.senad.gov.br/medias/original/201704/20170424-095653-001.pdf">Clique Aqui!</a>
                </p> 
                <hr class="my-4 bg-white"/>
                    <div class="form-group">
                        <div class="form-check texto-m">
                        <p class="texto-m">1 – Com que frequência você consome bebidas alcoólicas (cerveja, vinho, cachaça, etc.)?</p>
                        <input type="radio" name="q1" value="0" required onChange={(e) =>{setQ1(e.target.value);}}/> Nunca. <br />
                        <input type="radio" name="q1" value="1" required onChange={(e) =>{setQ1(e.target.value);}}/>Uma vez por mês pelo menos <br />
                        <input type="radio" name="q1" value="2" required onChange={(e) =>{setQ1(e.target.value);}}/>Duas a quatro vez por mês. <br />
                        <input type="radio" name="q1" value="3" required onChange={(e) =>{setQ1(e.target.value);}}/>Duas a três vezes por semana. <br/>
                        <input type="radio" name="q1" value="4" required onChange={(e) =>{setQ1(e.target.value);}}/>Quatro ou mais vezes por semana. <br/><br/>
                    </div>
                <div class="form-check texto-m">
                    <p class="texto-m">2 – Quantas doses, contendo álcool, você consome num dia em que normalmente bebe ?</p>
                    <input type="radio" name="q2" value="0" required onChange={(e) =>{setQ2(e.target.value);}}/>1 a 2 doses.<br/>
                    <input type="radio" name="q2" value="1" required onChange={(e) =>{setQ2(e.target.value);}}/>3 a 4 doses.<br/>
                    <input type="radio" name="q2" value="2" required onChange={(e) =>{setQ2(e.target.value);}}/>5 a 6 doses.<br/>
                    <input type="radio" name="q2" value="3" required onChange={(e) =>{setQ2(e.target.value);}}/>7 a 9 doses.<br/>
                    <input type="radio" name="q2" value="4" required onChange={(e) =>{setQ2(e.target.value);}}/>10 ou mais doses.<br/><br/>
                </div>
                
                <div class="form-check texto-m">
                    <p class="texto-m">3 – Com que freqüência que você consome 6 ou mais doses de bebida alcoólica em uma única ocasião?</p>
                    <input type="radio" name="q3" value="0" required onChange={(e) =>{setQ3(e.target.value);}}/>Nunca. <br/>
                    <input type="radio" name="q3" value="1" required onChange={(e) =>{setQ3(e.target.value);}} />Menos que mensalmente. <br/>
                    <input type="radio" name="q3" value="2" required onChange={(e) =>{setQ3(e.target.value);}} />Mensalmente. <br/>
                    <input type="radio" name="q3" value="3" required onChange={(e) =>{setQ3(e.target.value);}} />Semanalmente. <br/>
                    <input type="radio" name="q3" value="4" required onChange={(e) =>{setQ3(e.target.value);}}/>Diariamente ou quase diariamente. <br/><br/>
                </div>
                
                <div class="form-check texto-m">
                    <p class="texto-m">4 – Com que freqüência, durante os últimos doze meses, você percebeu que não conseguia parar de beber uma vez que havia começado? </p>
                    <input type="radio" name="q4" value="0" required  onChange={(e) =>{setQ4(e.target.value);}}/>Nunca. <br/>
                    <input type="radio" name="q4" value="1" required  onChange={(e) =>{setQ4(e.target.value);}}/>Menos que mensalmente. <br/>
                    <input type="radio" name="q4" value="2" required  onChange={(e) =>{setQ4(e.target.value);}}/>Mensalmente. <br/>
                    <input type="radio" name="q4" value="3" required  onChange={(e) =>{setQ4(e.target.value);}}/>Semanalmente. <br/>
                    <input type="radio" name="q4" value="4" required  onChange={(e) =>{setQ4(e.target.value);}}/>Diariamente ou quase diariamente. <br/><br/>
                </div>
                <div class="form-check texto-m">
                    <p class="texto-m">5 – Com que freqüência, durante os últimos doze meses, você deixou de fazer algo ou atender a um compromisso devido ao uso de bebidas alcoólicas ?</p>
                    <input type="radio" name="q5" value="0" required onChange={(e) =>{setQ5(e.target.value);}}/>Nunca. <br/>
                    <input type="radio" name="q5" value="1" required onChange={(e) =>{setQ5(e.target.value);}}/>Menos que mensalmente. <br/>
                    <input type="radio" name="q5" value="2" required onChange={(e) =>{setQ5(e.target.value);}}/>Mensalmente. <br/>
                    <input type="radio" name="q5" value="3" required onChange={(e) =>{setQ5(e.target.value);}}/>Semanalmente. <br/>
                    <input type="radio" name="q5" value="4" required onChange={(e) =>{setQ5(e.target.value);}}/>Diariamente. <br/><br/>
                </div>
                
                <div class="form-check texto-m">
                    <p class="texto-m">6 – Com que freqüência, durante os últimos doze meses, você precisou de uma primeira dose pela manhã para sentir-se melhor depois de uma bebedeira?</p>
                    <input type="radio" name="q6" value="0" required onChange={(e) =>{setQ6(e.target.value);}}/>Nunca. <br/>
                    <input type="radio" name="q6" value="1" required onChange={(e) =>{setQ6(e.target.value);}}/>Menos que mensalmente. <br/>
                    <input type="radio" name="q6" value="2" required onChange={(e) =>{setQ6(e.target.value);}}/>Mensalmente. <br/>
                    <input type="radio" name="q6" value="3" required onChange={(e) =>{setQ6(e.target.value);}}/>Semanalmente. <br/>
                    <input type="radio" name="q6" value="4" required onChange={(e) =>{setQ6(e.target.value);}}/>Diariamente ou quase diariamente. <br/><br/>
                </div>
                
                <div class="form-check texto-m">
                    <p class="texto-m">7 – Com que freqüência você sentiu-se culpado ou com remorso depois de beber?</p>
                    <input type="radio" name="q7" value="0" required onChange={(e) =>{setQ7(e.target.value);}}/>Nunca.<br/>
                    <input type="radio" name="q7" value="1" required onChange={(e) =>{setQ7(e.target.value);}}/>Menos que mensalmente.<br/>
                    <input type="radio" name="q7" value="2" required onChange={(e) =>{setQ7(e.target.value);}}/>Mensalmente.<br/>
                    <input type="radio" name="q7" value="3" required onChange={(e) =>{setQ7(e.target.value);}}/>Semanalmente.<br/>
                    <input type="radio" name="q7" value="4" required onChange={(e) =>{setQ7(e.target.value);}}/>Diariamente ou quase diariamente.<br/><br/>
                </div>
                <div class="form-check texto-m">
                    <p class="texto-m">8 – Com que freqüência, durante os últimos doze meses, você não conseguiu lembrar-se do que aconteceu na noite anterior porque havia bebido?</p>
                    <input type="radio" name="q8" value="0" required onChange={(e) =>{setQ8(e.target.value);}}/>Nunca. <br/>
                    <input type="radio" name="q8" value="1" required onChange={(e) =>{setQ8(e.target.value);}}/>Menos que mensalmente. <br/>
                    <input type="radio" name="q8" value="2" required onChange={(e) =>{setQ8(e.target.value);}}/>Mensalmente. <br/>
                    <input type="radio" name="q8" value="3" required onChange={(e) =>{setQ8(e.target.value);}}/>Semanalmente. <br/>
                    <input type="radio" name="q8" value="4" required onChange={(e) =>{setQ8(e.target.value);}}/>Diariamente ou quase diariamente. <br/><br/>
                </div>
                <div class="form-check texto-m">
                    <p class="texto-m">9 – Você ou outra pessoa já se machucou devido a alguma bebedeira sua?</p>
                    <input type="radio" name="q9" value="0" required onChange={(e) =>{setQ9(e.target.value);}}/>Nunca. <br/>
                    <input type="radio" name="q9" value="2" required onChange={(e) =>{setQ9(e.target.value);}}/>Sim, mas não nos últimos 12 meses. <br/>
                    <input type="radio" name="q9" value="4" required onChange={(e) =>{setQ9(e.target.value);}}/>Sim, nos últimos 12 meses. <br/><br/>
                </div>
                
                <div class="form-check texto-m">
                    <p class="texto-m">10 – Algum parente, amigo, médico ou outro profissional de saúde mostrou-se preocupado com seu modo de beber ou sugeriu que você diminuísse a quantidade?</p>
                        <input type="radio" name="q10" value="0" required onChange={(e) =>{setQ10(e.target.value);}}/>Nunca. <br/>
                        <input type="radio" name="q10" value="2" required onChange={(e) =>{setQ10(e.target.value);}}/>Sim, mas não nos últimos 12 meses. <br/>
                        <input type="radio" name="q10" value="4" required onChange={(e) =>{setQ10(e.target.value);}}/>Sim, nos últimos 12 meses. <br/><br/>
                </div> 
            </div>
                <p align="center"> 
                    <button class="btn rounded btn-light m-1 p-1 bg-light text-dark rounded" onClick={registeraudit}>Enviar</button>
                    <input class="btn rounded btn-light m-1 p-1 bg-light text-dark rounded" name="Submit" type="reset" value="Limpar"/>
                </p>
                <p>&nbsp;</p>
            </div>
            {auth && window.location.assign("http://localhost:3000/resultadoAudit")}
            <Footer />
        </>
    )
}

export default Audit
