import React from "react";
import { Switch, Route } from "react-router-dom";

import Index from './pages/Index';
import Audit from './pages/Audit';
import Cadastro from './pages/Cadastro';
import Contato from './pages/Contato';
import Login from './pages/Login';
import Moodle from './pages/Moodle';
import Quiz from './pages/Quiz';

function Routes(){
    return(
        <Switch>
            {/* Ok */}
            <Route exact path="/" component={Index}/>
            {/* Ok */}
            <Route exact path="/audit" component={Audit}/>
            {/* Ok */}
            <Route exact path="/cadastro" component={Cadastro} />
            {/* Ok */}
            <Route exact path="/contato" component={Contato} />
            {/* Ok */}
            <Route exact path="/login" component={Login} />
            {/* Ok */}
            <Route exact path="/moodle" component={Moodle} />
            <Route exact path="/quiz" component={Quiz} />
        </Switch>
    );
}

export default Routes