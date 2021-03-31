
import React, { useState } from 'react'
import Register from './Register';
import FormSuccess from './FormSuccess';


const RegisterForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    function submitForm() {
        setIsSubmitted(true)
    }


    return (
        <div>
            {!isSubmitted ? (<Register submitForm={submitForm} />) : (<FormSuccess />)}
        </div>
    );
}
export default RegisterForm;
