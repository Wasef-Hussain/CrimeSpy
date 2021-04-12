import React from 'react'
import "./style.css";

export default function Comment({username, comment}) {
    return (
        <div className="comment">
         <p>
        <strong>{username}</strong> {comment}
      </p>
    </div>

            
       
    )
}
