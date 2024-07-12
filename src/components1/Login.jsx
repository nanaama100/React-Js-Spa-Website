import React, {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Validation from './LoginValidation';
import { useNavigate } from 'react-router-dom';
import './Login.css'



const login = () => {

   const[values, setValues] = useState({
    Email: '',
    Password: ''
   })

   const[errors, setErrors] = useState({})

   const handleInput = (event) =>{
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
   }

   const navigate = useNavigate()

   const handleSubmit = (event) =>{
    event.preventDefault()
    setErrors(Validation(values));
    if (errors.Email === "" && errors.Password === ""){
      axios.post('http://localhost:8081/login', values)
      .then(res=>{
        if(res.data.Status ==='Success'){
          const id = res.data.id
          navigate('/customerdetail/'+id)
        }
        else{
          alert("Data record does not exist");
        }
      })
      .catch(err => console.log(err));
        }
   }


  return (
    <div className='LoggingImage'>
    <div className='CoverLoggingImage'>
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
        <div className=" p-3 rounded  loginForm">
          <div className='text-danger'>
          </div>
        <div className='LoginMe'>
        <h2 style={{color: 'white'}}>Login</h2>
        <form action='' onSubmit={handleSubmit} className='FormLog'>
            <div className="mb-3">
                <label htmlFor="email" className='align-items-center text-light'><strong>Email</strong></label>
                <input type="email" placeholder='Enter Email' name='Email'  className='form-control rounded-0' onChange={handleInput} />
                {errors.Email && <span className='text-danger'>{errors.Email}</span>}  
            </div>

            <div className="mb-3">
            <label htmlFor="password" className='text-light'><strong>Password</strong></label>
            <input type="password" placeholder='Enter Password' name='Password' className='form-control rounded-0' onChange={handleInput} />
            {errors.Password && <span className='text-danger'>{errors.Password}</span>} 
            </div>
            <button className="btn btn-success border w-100  rounded-0" type='submit'> Login </button>
            <p className='text-light'>Do you agree to our terms and policies?</p>
            <Link to='/SignUp'><button className='btn btn-default border w-100' style={{color: 'white'}}>Create Account</button></Link>
        </form>
        </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default login