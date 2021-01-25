
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';
import React, { useState, useEffect } from 'react'

import Login from './components/pages/Login/Login';
import RegisterForm from './components/pages/Login/RegisterForm';
import PasswordReset from './components/pages/Login/PasswordReset';
import ProfilePage from './components/pages/ProfilePage';
import Mapcrime from './components/pages/Mapcrime';
import { UserProvider } from './LoginContext'
import { CssBaseline, CircularProgress } from '@material-ui/core'

import Pagehelp from './components/pages/Pagehelp';
import about, { About } from './components/pages/aboutpage';
import Aboutpage from './components/pages/aboutpage';
import firebase from './components/firebase'
import Dashboard from './components/pages/Dashboard';
import Register from './components/pages/Login/Register';
import PrivateRoute from './components/PrivateRoute'


function App() {
 

  return  (

    <UserProvider >
      
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />

          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/map'>
            <Mapcrime />
          </Route>
          <PrivateRoute exacth path="/dashboard" component= {Dashboard}/>
            
          <Route path='/help'>
            <Pagehelp />
          </Route>
          <Route path='/about'>
            <Aboutpage />
          </Route>
          <Route>
            <PasswordReset path='./passwordreset' />
          </Route>
         
        </Switch>
       
        <Footer />
      </Router>
    </UserProvider>


  ) 
}

export default App;
