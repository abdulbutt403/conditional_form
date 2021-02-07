
import './App.css';
import Form from './components/Form';
import React , {Fragment} from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    
    <Router>
      <Fragment>
        <Route exact path="/" component={Form} />
      </Fragment>
    </Router>
  );
}

export default App;
