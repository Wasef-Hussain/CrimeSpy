import React, { useState, useContext, useRef } from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';
import firebase from '../../firebase'

import './Login.css'
import { useAuth } from '../../../LoginContext'

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    let history = useHistory();

    const emailRef = useRef()

    const passwordRef = useRef()
    const { login, googleLogin ,signInWithGoogle } = useAuth()

    const [loading, setLoading] = useState(false);
    
   

    async function handleSubmit(e) {
        e.preventDefault();




        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/dashboard")
            
        } catch {
            setError('Failed to Sign In')
        }
        setLoading(false)


    }





    return (
        <form onSubmit={handleSubmit}>
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
                            <div className={'titleAuth'}>Log into CrimeSpy</div>
                            {error && <p>{error}</p>}
                            <div className={'inputSBox'}>
                                <input className={'inputS'} type='email' placeholder={'Email'} name='email' ref={emailRef} required />

                            </div>
                            <div className={'inputSBox'}>
                                <input className={'inputS'} type={'password'} placeholder={'Password'} name='password' ref={passwordRef} required />

                            </div>
                            <div className={'contentBox'}>
                                <div className={'checkboxBox'}>

                                    <label className={'checkboxLabel'}><Link to='/register' style={{ textDecoration: 'none' }}>Need an Account?</Link> </label>
                                </div>
                                <div className={'text1'}><Link to="/passwordreset" style={{ textDecoration: 'none' }}>Forgot Password?</Link></div>
                            </div>
                            <div className={'btnAuth'}><button style={{ border: 'none' }} disabled={loading}>Login</button></div>
                            <div className={'borderBox'}>
                                <div className={'line'} />
                                <div className={'text2 or'}>OR</div>
                            </div>
                            <div className={'socialMediaBox'}>
                                <div className={'icAuth google'} onClick={signInWithGoogle} />
                                <div className={'icAuth facebook'} />
                                <div className={'icAuth twitter'} />

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </form>


    )



}
export default withRouter(Login);
