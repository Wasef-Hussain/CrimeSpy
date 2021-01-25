export default function validateinfo(values) {
    let error = {}


    if (!values.fullname.trim()) {
        error.fullname = "* required"
    }

    if (!values.username.trim()) {
        error.username = "* required"
    }

    //email
    if (!values.email.trim()) {
        error.email = "* required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        error.email = "Email address is invalid"
    }

    if (!values.password) {
        error.password = "* required"
    } else if (values.password.lenght < 6) {
        error.password = 'Password needs to be 6 characters or more'
    }
    if (!values.confirmpassword) {
        error.confirmpassword = "* required"
    } else if (values.confirmpassword.lenght < 6) {
        error.confirmpassword = 'Confirm Password needs to be 6 characters or more'
    } else if (values.confirmpassword !== values.password) {
        error.confirmpassword = 'Password do not match'
    }

    return error;

}