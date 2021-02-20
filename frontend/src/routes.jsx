import React from "react";
import { Switch, Route } from "react-router-dom";

import Index from './pages/Index';
import Audit from './pages/Audit';
import resultadoAudit from './pages/ResultadoAudit';
import Cadastro from './pages/Cadastro';
import Contato from './pages/Contato';
import Login from './pages/Login';
import Moodle from './pages/Moodle';
import Quiz from './pages/Quiz';

function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={Index}/>
            <Route exact path="/audit" component={Audit}/>
            <Route exact path="/resultado_audit" component={resultadoAudit} />
            <Route exact path="/cadastro" component={Cadastro} />
            <Route exact path="/contato" component={Contato} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/moodle" component={Moodle} />
            <Route exact path="/quiz" component={Quiz} />
        </Switch>
    );
}

export default Routes