import React, { useEffect, useState } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import storeSlice from './redux/storeSlice'
import Header from './components/header';
import SignIn from './components/sign-in';
import SignUp from './components/sign-up';
import Home from './pages/home';
import Shop from './pages/shop';

import firebase, { createUserProfileDocument, auth } from './firebase'
import { configureStore } from '@reduxjs/toolkit';

const App = () => {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const unsubscribeForm = auth.onAuthStateChanged(async (userAuth: firebase.User | null) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef?.onSnapshot(snapShot => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() })
        })
      }
      setCurrentUser({ currentUser: userAuth })
    })

    return () => unsubscribeForm()
  }, [])

  const store = configureStore({ 
    reducer: storeSlice
  })

  return (
    <Provider store={ store }>
      <Router>
        <Header currentUser={ currentUser } />
        <Switch>
          <Route path='/' exact component={ Home } />
          <Route path='/shop' component={ Shop } />
          <Route path='/signin' component={ SignIn } />
          <Route path='/signup' component={ SignUp } />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
