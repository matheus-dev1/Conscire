import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//import Moodle from './pages/Moodle'
// Ok
//import Contato from './pages/Contato'
// Ok
//import Index from './pages/Index'
// Ok
//import Login from './pages/Login'
// Ok
//import Cadastro from './pages/Cadastro'
// Ok
//import Audit from './pages/Audit'
// Ok
//import ResultadoAudit from './pages/ResultadoAudit'

import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './routes';

import './App.css'


function App() {
  return (
    <>
      <Router>
        
      
        <Header />
        
        <Routes />
        
        <Footer />
        

      </Router>
      
    </>
  );
}

export default App;
