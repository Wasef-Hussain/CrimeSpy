import React, { useContext, createContext, useState, useEffect } from 'react';
import { auth,db, facebookProvider , googleProvider } from './components/firebase'
import { Link, useHistory } from 'react-router-dom';
import firebase from 'firebase/app'




export const LoginContext = createContext();

export function useAuth() {
    return useContext(LoginContext)
}


export function UserProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    let history = useHistory();
    
    function signup(email, password, username, fullname) {
        return auth.createUserWithEmailAndPassword(email, password)
        .then(async result =>{
            db.collection('users')
            .add({
                
                email,
                id:result.user.uid,
                password,
                username,
                fullname,
                URL:'',
                messages:[{notificationId:"", number:0}] 

            }).then((docRef)=>{

            });
        })
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }
    function logout() {
        return auth.signOut()
        history.push("/login")
    }
    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }
 function submitsignInWithFacebook()
 {
    
     return auth.signInWithPopup(facebookProvider).then(
       async result =>{
             let user = result.user;
             const userMap = {
                uid: user.uid,
                email: user.email,
                username: user.displayName,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              };
             return await db.collection('users').doc(user.uid).set(userMap).then((docRef)=>{

             })
         }
     );
 }

 function addfbuser(email,displayName)
 {
    db.collection('users')
    .add({
        
        email,
       displayName,
        URL:'',
        messages:[{notificationId:"", number:0}] 

    }).then((docRef)=>{

    });
 }
 function submitsigninwithPhone(number, name)
 {
    console.log(number)

 }

 

 function submitsignInWithGoogle()
 {
     return auth.signInWithPopup(googleProvider).then((result)=>{
        
     });
 }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])



    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        submitsignInWithFacebook,
        submitsignInWithGoogle,
        submitsigninwithPhone,
        addfbuser
    }

    return (
        <LoginContext.Provider value={value}>
            {!loading && children}
        </LoginContext.Provider>
    );
}

