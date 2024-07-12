function Validation(values){
    const error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // NB: this password validation must follow these rules;
    // 1. At least one letter.
    // 2. At least one digit. 
    // 3. Must be minimum of 8 characters long
    const password_pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    // this section is for the Name
    if(!values.name || !values.gender || !values.birthdate || !values.country || !values.zipcode || !values.address || !values.image){
        error.name = "Kindly enter your name"
        error.gender = "Kindly select your gender"
        error.birthdate = "Kindly enter your birthdate"
        error.country = "country field required"
        error.zipcode = "zipcode field required"
        error.address= "address field required"
        error.image= "Kindly upload an image"
    }
    else{
        error.name=""
        error.gender=""
        error.birthdate=""
        error.country=""
        error.zipcode=""
        error.address=""
        error.image=""
    }

    // this section is for the email
    if (values.email === ""){
        error.email = "Kindly input your mail"
    }
    else if (!email_pattern.test(values.email)){
        error.email = "Email did not match"
    }
    else{
        error.email=""
    }

    // this section is for the password
    if (values.password === ""){
        error.password = "Kindly input your password"
    }
    else if (!password_pattern.test(values.password)){
        error.password = 
        "Password must be at least 8 characters long, contain at least one letter and one digit"
    }
    else{
        error.password=""
    }

   return error

}


export default Validation