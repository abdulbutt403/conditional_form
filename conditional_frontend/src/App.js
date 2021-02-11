
import './App.css';
import Form from './components/Form';
import React , {Fragment} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signin from './components/signin';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    
    <Router>
      <Fragment>
        <Route exact path="/" component={Form} />
        <Route exact path="/admin" component={Signin} />
        <Route path="/dashboard" component={Dashboard} />
      </Fragment>
    </Router>
  );
}

export default App;
