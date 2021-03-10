import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/home';
import Shop from './pages/shop';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </Router>
  );
}

export default App;
