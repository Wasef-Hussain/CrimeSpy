import React, { Component, useState, useContext } from 'react'
import firebase from 'firebase/app'
import { LoginContext } from './../LoginContext';
import { useHistory } from 'react-router';

export default function PhoneAuthe() {
    const [currentUser,setCurrentUser] = useContext(LoginContext).currentUser;
    const [phnnumber, setPhnNumber] = useState('');
    
    const history = useHistory();
    const handleInput = (e) => {
        setPhnNumber(e.target.value);
      };
    const handleClick =()=>{
        var recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
        var number = phnnumber;
        console.log(number);
        firebase.auth().signInWithPhoneNumber(number, recaptcha).then( function(e) {
          var code = prompt('Enter the otp', '');
    
            
            if(code === null) return;
    
            
            e.confirm(code).then(function (result) {
                console.log(result.user);
                setCurrentUser(result);
                history.push("/dashboard");
                
                
            }).catch(function (error) {
                console.error( error);
                
            });
    
        })
        .catch(function (error) {
            console.error( error);
    
        });
      }
    return (
        <div>
            <label></label>
               <input type="text" value={phnnumber} onChange={handleInput} />
            <div id="recaptcha"></div>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}
