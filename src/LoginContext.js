import React, { useContext, createContext, useState, useEffect } from 'react';
import { auth,db } from './components/firebase'



export const LoginContext = createContext();

export function useAuth() {
    return useContext(LoginContext)
}


export function UserProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    
    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
        .then(async result =>{
            db.collection('users')
            .add({
                
                email,
                id:result.user.uid,
                password,
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
    }
    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
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
        resetPassword
    }

    return (
        <LoginContext.Provider value={value}>
            {!loading && children}
        </LoginContext.Provider>
    );
}

