import React from 'react';
import LogInImg from '../../graphics/images.jpg';
import {withRouter} from 'react-router-dom';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username :'',password:''
        }
    }
    
    handleSubmit = () =>{
            const users = this.props.users
            const filtereduser = users.find(user=>{
                if(user.username===this.state.username && user.password===this.state.password)
                {

                    //console.log(filtereduser)
                    localStorage.setItem("user",user.username)
                    this.props.history.push("/home")
                    return true;
                }
                else
                {
                    console.log("incorrect user");
                    return false;
                }
            }) 
            
    }

    handleChangeName=(event)=>{
        this.setState({ username : event.target.value})
    }
    handleChangePassword=(event)=>{
        this.setState({ password : event.target.value})
    }

    render(){
        return <div className="base-container" ref={this.props.containerRef}>
            <div className="base-container-header">Login</div>
            <div className="base-container-content">
                <div className="image">
                <img src={LogInImg}/>
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">User Name</label>
                        <input type="text" name="username" placeholder="Enter your User name" onChange={this.handleChangeName}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Enter your Password" onChange={this.handleChangePassword}></input>
                    </div>
                </div>
            </div>
            <div className="base-container-footer">
                    <button type="button" className="btn" onClick={this.handleSubmit}>Login</button>
            </div>
        </div>
    }

}

export default withRouter(Login);