import React, { useState, useContext } from 'react'
import { LoginContext } from '../../LoginContext'

const Aboutpage = () => {
    const [user, setUser] = useContext(LoginContext);
    return (
        <div>
            {user.map(users => (
                <h3>
                    name={users.fullname}
                </h3>

            ))}
        </div>
    )
}
export default Aboutpage;