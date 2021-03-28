import React from 'react';
import LogInImg from '../../graphics/signup-logo.png';
import './index.css';


export class Register extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return <div className="base-container" ref={this.props.containerRef}>
            <div className="base-container-header">Register</div>
            <div className="base-container-content">
                <div className="image">
                    <img src={LogInImg} />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Enter your Email"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">User Name</label>
                        <input type="text" name="username" placeholder="Enter your User name"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Enter your Password"></input>
                    </div>
                </div>
            </div>
            <div className="base-container-footer">
                <button type="button" className="btn">Register</button>
            </div>
        </div>
    }
}