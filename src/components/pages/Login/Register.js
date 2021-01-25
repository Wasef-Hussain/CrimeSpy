import React, { useState, useContext, useRef } from 'react';

import { Link, useHistory } from 'react-router-dom';
import useForm from './useForm'
import validate from './validateinfo'

import { LoginContext, useAuth } from '../../../LoginContext'
import firebase from '../../firebase'


import './Register.css'

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const emailRef = useRef()
    const usernameRef = useRef()
    const fullnameRef = useRef()
    const passwordRef = useRef()
    const confirmpasswordRef = useRef()
    const { signup } = useAuth()
    const {currentUser} = useContext(LoginContext);
    // const [user, setUser] = useContext(LoginContext).totalUsers;
    let history = useHistory();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    async function handleSubmit(e) {
        e.preventDefault();
        if (passwordRef.current.value !== confirmpasswordRef.current.value) {
            return setError("Passwords do not match")
        }



        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            
            history.push("/dashboard")
        } catch {
            setError('Failed to Create an account')
        }
        setLoading(false)


    }
    // const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    //     event.preventDefault();
    //     try {
    //         const { user } = await auth.createUserWithEmailAndPassword(email, password);
    //         generateUserDocument(user, { username });
    //     }
    //     catch (error) {
    //         setError('Error Signing up with email and password');
    //     }

    //     setEmail("");
    //     setPassword("");
    //     setUsername("");
    //     setFullname("");
    //     setConfirmPassword("");
    // };

    // const adduser = e => {
    //     e.preventDefault();
    //     setUser(prevUser => [...prevUser, { name: fullname, username: username, email: email, password: password }])
    // }
    // const onChangeHandler = event => {
    //     const { name, value } = event.currentTarget;
    //     if (name === "email") {
    //         setEmail(value);
    //     } else if (name === "password") {
    //         setPassword(value);
    //     } else if (name === "username") {
    //         setUsername(value);
    //     }
    //     else if (name === "fullname") {
    //         setFullname(value);
    //     }
    //     else if (name === "confirmpassword") {
    //         setConfirmPassword(value);
    //     }
    // };
    // const updateEmail = e => {
    //     setEmail(e.target.value);

    // }
    // const updateFullname = e => {
    //     setFullname(e.target.value);

    // }

    // const updateUsername = e => {
    //     setUsername(e.target.value);

    // }
    // const updatePassword = e => {
    //     setPassword(e.target.value);

    // }

    // const updateConfirmPassword = e => {
    //     setConfirmPassword(e.target.value);

    // }


    console.log(currentUser)

    return (
        <>
            {currentUser?
                 ''
            :
            <form className='form' onSubmit={handleSubmit}>

                 <div className={'bodyform'}>
                     <div className={'authBox'}>
     
                         <div className={'leftBox'}>
                             <div className={'bgGreen'} />
                             <div className={'imageAuth'} />
                             <div className={'imageText bold style1'}>CrimeSpy</div>
                             <div className={'imageText style2'}>Find Crime in Your NeighbourHood</div>
     
                         </div>
                         <div className={'rightBox'}>
                             <div className={'box'}>
                                 <div className={'titleAuth'}>Register into CrimeSpy</div>
     
                                 {error && <p>{error}</p>}
                                 <div className={'inputSBox'}>
                                     <input className={'inputS'} type={'text'} placeholder={'Full Name'} name='fullname' ref={fullnameRef} required />
     
                                 </div>
                                 <div className={'inputSBox'}>
                                     <input className={'inputS'} type={'text'} placeholder={'Username'} name='username' ref={usernameRef} required />
     
                                 </div>
                                 <div className={'inputSBox'}>
                                     <input className={'inputS'} type='email' placeholder={'Email'} name='email' ref={emailRef} required />
     
                                 </div>
                                 <div className={'inputSBox'}>
                                     <input className={'inputS'} type={'password'} placeholder={'Password'} name='password' ref={passwordRef} required />
     
                                 </div>
                                 <div className={'inputSBox'}>
                                     <input className={'inputS'} type={'password'} placeholder={'Confirm Password'} name='confirmpassword' ref={confirmpasswordRef} required />
     
                                 </div>
     
                                 <div className={'btnAuth'} ><button style={{ border: 'none' }} type='submit' disabled={loading}
                                 >Register</button></div>
     
                                 <div className={'contentBox'}>
     
                                     <div className={'text1'}>
                                         <Link to='/login' id="btnlink" style={{ textDecoration: 'none' }}  >
                                             Already have an account?
                                         </Link>
                                     </div>
                                 </div>
     
     
                             </div>
                         </div>
     
                     </div>
                 </div>
     
             </form>}
        
        </>
        
       

    )



}
export default Register;