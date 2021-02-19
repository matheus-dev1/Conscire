import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Index from './pages/Index';
import Audit from './pages/Audit';
import Cadastro from './pages/Cadastro';
import Contato from './pages/Contato';
import Login from './pages/Login';
import Moodle from './pages/Moodle';

const RoutesMain = () => {
    return(
        <Routes>
            <Route path="/" element={<Index/>} />
            <Route path="/Audit/index" element={<Audit/>} />
            <Route path="Cadastro/index" element={<Cadastro/>} />
            <Route path="Contato/index" element={<Contato/>} />
            <Route path="Login/index" element={<Login/>} />
            <Route path="Moodle/index" element={<Moodle/>} />
            
        </Routes>
    );
}

export default RoutesMain