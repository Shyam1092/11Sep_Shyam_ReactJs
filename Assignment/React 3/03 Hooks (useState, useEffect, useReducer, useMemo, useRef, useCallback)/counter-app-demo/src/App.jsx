import React from 'react'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { Provider } from "react-redux";
import Store from '../Store';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Register from './components/Register';

export default function App() {
  return (
    <Provider store={Store}>
   <Router>
    <Routes>
      <Route path='/' element=<Home />></Route>
      <Route path='/about' element=<About />></Route>
      <Route path='/register' element=<Register />></Route>
      <Route path='/login' element=<Login />></Route>
      <Route path='/not-found' element=<NotFound />></Route>


    </Routes>
   </Router>

    </Provider>
  )
}

