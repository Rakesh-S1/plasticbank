import React from 'react';
import { render } from 'react-dom';
import { Router,Switch,Route } from 'react-router-dom';
import history from './history'
import App from './components/App';
import Blocks from './components/Blocks';
import ConductTranscation from './components/ConductTransaction';
import TransactionPool from './components/TransactionPool';
import './temp.css';
import main1 from './components/Main1';
import About from './components/about';
import Nodes from './components/Nodes'

render(
    <Router history={history}>
        <Switch>
            <Route exact={true} path='/' component={main1} />
            <Route path='/main'  component={main1}/>
            <Route path='/wallet' component={App}/>
            <Route path='/blocks' component={Blocks} />
            <Route path='/Conduct-Transaction' component={ConductTranscation}/>
            <Route path='/Transaction-Pool' component={TransactionPool}/>
            <Route path='/Nodes' component={Nodes}/>
            <Route path='/About' component={About}/>

            
        </Switch>
    </Router>,
    document.getElementById("root")
    );
