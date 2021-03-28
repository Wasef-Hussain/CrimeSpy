import React, { useState, useContext } from 'react'
import { LoginContext } from '../../LoginContext'

const Pagehelp = () => {
    const value = useContext(LoginContext);
    return
    (
        <div>
            <h1>
            {value}
            </h1>
        </div>
    );
};
export default Pagehelp;