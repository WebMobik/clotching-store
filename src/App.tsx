import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/header';
import SignIn from './components/sign-in';
import Home from './pages/home';
import Shop from './pages/shop';


const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/shop' component={Shop} />
        <Route path='/signin' component={SignIn} />
      </Switch>
    </Router>
  );
}

export default App;
