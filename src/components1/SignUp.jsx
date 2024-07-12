import React, { useState, useEffect } from 'react';
import './SignUp.css';
import { Formik, Form, Field} from 'formik';
import axios from 'axios';
import { IoMdEye } from "react-icons/io";
// import * as Yup from 'yup';
import Validation from './SignUpValidation'


function SignUp() {
  // this section of the code is for the form moving from one step to the other
  const[step, setStep] = useState(1)

  const nextStep = (values) =>{
    setStep(step + 1)
  }
  
  const prevStep = () =>{
    setStep(step - 1)
  }

  // the function to toggle the showing and hiding of the userPassword
  const[showPassword, setShowPassword] = useState(false);
 
  const ShowUserPassword =()=>{
    setShowPassword(!showPassword)
  }

  // this section of the code is for created to fetch a list of countries using the given API
  const[countries, setCountries] = useState([])
  useEffect(() => {
    const fetchCountries =async()=>{
      try{
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const sortedCountries = response.data.sort((a,b)=> a.name.common.localeCompare(b.name.common))
        setCountries(sortedCountries);
      }
      catch (error){
        console.error("Error in fetching list of countries", error);
      }
    };

    fetchCountries()
    }, [])

  // this section of the code is created to validate the user form using yup
  // const UserFormValidation = Yup.object().shape({
  //   name: Yup.string().required('Name field is required.'),
  //   gender: Yup.string().required('Gender field is required.'),
  //   birthdate: Yup.date().required('Birthdate field is required.'),
  //   country: Yup.string().required('Country field is required'),
  //   zipcode: Yup.string().required('Zipcode field is required'),
  //   address: Yup.string().required('Address field is required'), 
  //   // email1: Yup.string().email('Invalid Email Address').required('Email is required'),
  //   password: Yup.string().required('Kindly Enter Your Password'),
  //   image: Yup.mixed().required('Kindly upload an image')
  // })

  const[errors, setErrors] = useState({})

  // this function is to submit the form to the server using the API
  const handleSubmit=(values)=>{
    setErrors(Validation(values))
    if (errors.name === "" && errors.gender === "" && errors.birthdate==="" && errors.country==="" && errors.zipcode==="" &&
      errors.address === "" && errors.email ==="" && errors.password === "" && errors.image === ""
    ){
    axios.post('http://localhost:8081/signup',values)
    .then(res=>{
      if( res.data.Status === "Success"){
        alert("Account Created Successfully");
      }
    })
    .catch(error=>{
      console.error(error)
  })
  }
};


  return (
    <div className="sign-up-container">
    <div className='d-flex flex-column align-items-center pt-4'>
            <h2 style={{textTransform: 'uppercase', color: '#fff', textDecoration: 'underline'}}>Registration Form</h2>
            <p id='RegPara'>
              Kindly fill the form below to create an account with us. 
              This provides a sure way to have access to discounts, promotions, coupons and so much more.
            </p>
            <Formik  initialValues={{
              name: '',
              gender: '',
              birthdate: '', 
              country: '',
              zipcode: '',
              address: '',
              email: '',
              password: '',
              image : null
            }} 
              onSubmit={(values)=>{
                handleSubmit(values)
              }}> 
              {({setFieldValue})=>(
                <Form>
                  {step === 1 && (
                    <div id='FormyBigBox'>
                      <h4 id='HeadForm1'>Personal Information</h4>
                      <br/>
                      <strong> <label for="name" class='form-label'>Name</label></strong>
                      <Field type="text" name= "name" placeholder= "Enter Name" class='form-control' />
                      {errors.name && <span className='text-danger'>{errors.name}</span>} 
                      {/* <ErrorMessage name='name' component='div' id='errorMessage'/> */}
                      <br/>

                      <div role='group' aria-labelledby='Select Gender'>
                          <Field type="radio" name="gender" value="male" />
                          <label>Male</label>                      
                        <br/>                      
                          <Field type="radio" name="gender" value="female" />
                          <label>Female</label>                     
                        <br/>
                        <Field type="radio" name="gender" value="other" />
                        <label>Other </label> 
                      </div>
                      {errors.gender && <span className='text-danger'>{errors.gender}</span>} 
                       {/* <ErrorMessage name='gender' component='div' id='errorMessage'/>                          */}
                        <br/>

                      <strong><label for="birthdate" class='form-label'>Birth Date</label></strong>
                      <Field type="date" name="birthdate" class='form-control'/>
                      {errors.birthdate && <span className='text-danger'>{errors.birthdate}</span>} 
                      {/* <ErrorMessage name='birthdate' component='div' id='errorMessage'/> */}
                      <br/>
                      <button type='button' onClick={nextStep} id='ButtonForm1'>Next</button>
                    </div>
                  )}
                  {step === 2 && (
                    <div id='FormyBigBox'>
                      <h4 id='HeadForm1'>Address</h4>
                      <br/>
                      <strong><label for="country" class='form-label'>Select Country</label></strong>
                      <Field as='select' name="country" class='form-control' >
                       <option value="">Select a Country</option>
                       {countries.map((country)=>(
                        <option key={country.cca2} value={country.name.common}>{country.name.common}</option>
                       ))}
                      </Field> 
                      {errors.country && <span className='text-danger'>{errors.country}</span>} 
                      {/* <ErrorMessage name='country' component='div' id='errorMessage'/> */}
                      <br/>

                      <strong><label for="zipcode" class='form-label'>Zip Code</label></strong>
                      <Field type="text" name="zipcode" placeholder= "Enter Zip Code" class='form-control'/>
                      {errors.zipcode && <span className='text-danger'>{errors.zipcode}</span>} 
                      {/* <ErrorMessage name='zipcode' component='div' id='errorMessage'/> */}
                      <br/>

                      <strong><label for="address" class='form-label'>Address</label></strong>
                      <Field type="text" name="address" class='form-control' placeholder='1234 Main St'/>
                      {errors.address && <span className='text-danger'>{errors.address}</span>} 
                      {/* <ErrorMessage name='address' component='div' id='errorMessage'/> */}
                      <br/>
                      <button type='button' onClick={prevStep} id='ButtonForm2'>Previous</button>
                      <button type='button' onClick={nextStep} id='ButtonForm1'>Next</button>
                    </div>
                  )}
                  {step === 3 && (
                    <div id='FormyBigBox'>
                      <h4 id='HeadForm1'>Contact Info</h4>
                      <br/>
                      <strong><label for="email" class='form-label'>Email</label></strong>
                      <Field type="email" class='form-control' name='email' placeholder='james@gmail.com' />
                      {errors.email && <span className='text-danger'>{errors.email}</span>} 
                      {/* <ErrorMessage name='email' component='div' id='errorMessage'/> */}
                      <br/>
                      <strong><label for="password" class='form-label'>Password</label></strong>
                      <Field type= {showPassword ? 'text': 'password'} class='form-control' name='password' placeholder='Enter Password'/>
                      <i onClick={ShowUserPassword}><IoMdEye className='InputingIcons'/></i> 
                      <p id='InputNotes'><span><strong>NB:</strong></span> this password validation must follow these rules;</p>    
                      <p id='InputNotes'>1. At least one uppercase.</p> 
                      <p id='InputNotes'>2. At least one digit. </p>   
                      <p id='InputNotes'>3. Must be minimum of 8 characters long.</p> 
                      {errors.password && <span className='text-danger'>{errors.password}</span>} 
                      {/* <ErrorMessage name='password' component='div' id='errorMessage'/>            */}
                      <br/>
                      <strong><label for='image' class='form-label'>Select Image</label></strong>
                      <input name='image' type= 'file' class='form-control' onChange={(event)=>{setFieldValue("image", event.currentTarget.files[0]);}}/>
                      {errors.image && <span className='text-danger'>{errors.image}</span>} 
                      {/* <ErrorMessage name='image' component='div' id='errorMessage'/> */}
                      <br/>
                      <br/>
                      <button type='button' onClick={prevStep} id='ButtonForm2'>Previous</button>
                      <button type='submit' id='ButtonForm1'>Submit</button>
                    </div>
                  )}
                </Form>
                )}
            </Formik>
            </div>
          </div>
  )
}

export default SignUp
