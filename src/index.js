import React from 'react';
import ReactDOM from 'react-dom';


import App from './App';
import * as firebase from 'firebase';
import { configure } from '@testing-library/react';
import UserProvider from "./providers/UserProvider";
import { LoginContext } from './LoginContext';
import AdminDashboard from './components/pages/AdminArea/AdminDashboard';





ReactDOM.render(
  

  
      <App />
     


  ,
  document.getElementById('root')
);


