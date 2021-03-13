import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import AdminDashboard from './components/pages/AdminArea/AdminDashboard'
import * as firebase from 'firebase';
import { configure } from '@testing-library/react';
import UserProvider from "./providers/UserProvider";
import { LoginContext } from './LoginContext';



function Admin (){
    return(
        <Router>
            <AdminDashboard path = '/admin'/>
        </Router>
    )
}


export default Admin;