
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
import AdminDashboard from './components/Dashboard/Dashboard'
import Udashboard from './components/pages/UserArea/udashboard'
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import {createBreakpoints} from '@chakra-ui/theme-tools'
const breakpoints = createBreakpoints({"640px":"640px"})
const mytheme = extendTheme({breakpoints});
const routes = [
  {
      path: "/",
      layout: true,
      component: Home
  },

  {
    path: "/register",
    layout: true,
    component: Register
  },
  {
    path: "/dashboard",
    layout: true,
    component: Dashboard
  },


  {
    path: "/login",
    layout: true,
    component: Login
  },

  {
    path: "/map",
    layout: true,
    component: Mapcrime
  },

  

  {
    path: "/help",
    layout: true,
    component: Pagehelp
  },

  {
    path: "/about",
    layout: true,
    component: Aboutpage
  },
  {
    path: "/passwordreset",
    layout: true,
    component: PasswordReset
  },

  {
    path: "/admin",
    layout: false,
    component: AdminDashboard
  },
  
  {
    path: "/beta",
    layout: false,
    component: Udashboard
  }



]

function App() {


  return (
    <ChakraProvider theme={mytheme}>
    <UserProvider >
     
      <Router>

        
        <Switch>

          {
            routes.map(
              (route, index) => 
              <PrivateRoute key={`route-${index}`} exact path={route.path} layout={true}>
                {route.layout && <Navbar />}
                <route.component />
                {route.layout && <Footer />}
                </PrivateRoute>
                
                
                
                
                )
          }

          
        </Switch>

   
      </Router>
      
    </UserProvider>
    </ChakraProvider>

  )
}



export default App;
