import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import Companies from './pages/companies';
import Number from './pages/number';
import Home from './pages/home';

function App() { 
  return (
    <Router>
      <Switch>
        <Route path='/companies'>
          <Companies />
        </Route>
        <Route path="/number">
          <Number />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
