function Validation(values){
    alert("")
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // NB: this password validation must follow these rules;
    // 1. At least one letter.
    // 2. At least one digit. 
    // 3. Must be minimum of 8 characters long
    const password_pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    // this section is for the email
    if (values.Email === ""){
        error.Email = "Kindly input your mail"
    }
    else if (!email_pattern.test(values.Email)){
        error.Email = "Email did not match"
    }
    else{
        error.Email=""
    }

    // this section is for the password
    if (values.Password === ""){
        error.Password = "Kindly input your password"
    }
    else if (!password_pattern.test(values.Password)){
        error.Password = "Password did not match"
    }
    else{
        error.Password=""
    }

    return error;

}


export default Validation