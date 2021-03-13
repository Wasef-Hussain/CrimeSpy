import React, { useState, useContext, useRef } from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';
import firebase from 'firebase/app'
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneIcon from '@material-ui/icons/Phone';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import './Login.css'
import { useAuth } from '../../../LoginContext'

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState(null);
    const [open, setOpen] = useState(false);
    const phoneref = useRef();
    const nameref = useRef();

    const handleClickOpen = () => {
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };

      async function handlephone (e)
      {
        e.preventDefault();
        try {
            setError('')
            setLoading(true)
            await submitsigninwithPhone(number,name);
            
            
        
        } catch {
            setError('Failed to Create an account')
        }
        
      }
    let history = useHistory();

    const emailRef = useRef()

    const passwordRef = useRef()
    const { login, googleLogin ,signInWithGoogle, submitsignInWithFacebook, submitsignInWithGoogle, submitsigninwithPhone } = useAuth()

    const [loading, setLoading] = useState(false);


    
   

    async function handleSubmit(e) {
        e.preventDefault();




        try {
            //  setError('')
             setLoading(true)
            // // await login(emailRef.current.value, passwordRef.current.value)
            await submitsignInWithFacebook() 
            history.push("/dashboard")
            // console.log('working')
        } catch {
            setError('Failed to Sign In')
        }
        setLoading(false)


    }



  











    return (
        
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
                            <div className={'btnAuth'}><button type={'submit'} style={{ border: 'none',background:'#50c2ec' }}  onClick={handleSubmit} ><FacebookIcon style={{ margin:'auto' }} />  Login with FaceBook</button></div>
                     
                            
                            
                            <div className={'btnAuth'}><button style={{ border: 'none',background:'#50c2ec' }} onClick={handleClickOpen} ><PhoneIcon style={{ margin:'auto' }}/>  Login with PhoneNumer</button></div>
                           <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                           <form onSubmit={handlephone}>
                           <DialogTitle id="form-dialog-title">PhoneNumer</DialogTitle>
                                    <DialogContent>
                                    <DialogContentText>
                                        Please Enter Your Mobile Number.
                                    </DialogContentText>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="number"
                                        label="Phone Number"
                                        type="number"
                                        value={number}
                                        onChange={(e)=> setNumber(e.target.value)}
                                        
                                        fullWidth
                                    />
                                    </DialogContent>
                                    <DialogContent>
                                    <DialogContentText>
                                        Please Enter Your UserName.
                                    </DialogContentText>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="User Name"
                                        type="name"
                                        value={name}
                                        onChange={(e)=> setName(e.target.value)}
                                       
                                        fullWidth
                                    />
                                    </DialogContent>
                                    <DialogActions>
                                    <Button onClick={handleClose} color="primary">
                                        Cancel
                                    </Button>
                                    <Button type='submit' color="primary">
                                        Submit
                                    </Button>
                                    </DialogActions>
                           </form>
                           
                                    
                                </Dialog>
                           
                        </div>
                    </div>

                </div>
            </div>

       


    )



}
export default withRouter(Login);
