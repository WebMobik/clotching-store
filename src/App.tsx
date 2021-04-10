import React, { useEffect, useState } from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

import storeSlice from './redux/storeSlice'
import Header from './components/header'
import SignIn from './components/sign-in'
import SignUp from './components/sign-up'
import Home from './pages/home'
import Shop from './pages/shop'
import Checkout from './pages/checkout'

import firebase, { createUserProfileDocument, auth } from './firebase'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const App = () => {
  const [currentUser, setCurrentUser] = useState<{} | null>(null)

  useEffect(() => {
    const userRef = auth.onAuthStateChanged(
      async (userAuth: firebase.User | null) => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth)

          userRef?.onSnapshot((snapShot) => {
            setCurrentUser({ id: snapShot.id, ...snapShot.data() })
          })
        }
        setCurrentUser({ ...userAuth })
      }
    )

    return () => userRef()
  }, [])

  const persistedReducer = persistReducer(persistConfig, storeSlice)

  const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  })

  const persistor = persistStore(store)

  console.log('render')

  return (
    <Provider store={store}>
      <Router>
        <PersistGate persistor={persistor}>
          <Header currentUser={currentUser} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </PersistGate>
      </Router>
    </Provider>
  )
}

export default App
