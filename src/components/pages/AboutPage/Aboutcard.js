import React from 'react'
import './aboutus.css';
import logo from './about5.jpeg';


export default function AboutCard(props) {
    return (
        <div className="body1">
             <div className="container1">
            {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> */}
            <div className="profiles">
            <div className="profile">
           <img src={logo} className="profile-img"/>
       
        <h3 className="user-name">{props.name}</h3>
        <h5>Software Engineer</h5>
        <p>{props.info}</p>
        <a href="#" className="fa fa-facebook fa-2x"></a>
        <a href="#" className="fa fa-twitter fa-2x"></a>
      
      
    </div>
  </div>
        </div>
        </div>
           
    )


    
}

