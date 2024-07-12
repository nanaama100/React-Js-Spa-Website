import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function CustomerDetail() {
  const {id} = useParams();

  const [customer, setCustomer] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:8081/get/'+id)
        .then(res => setCustomer(res.data.Result[0]))
        .catch(err => console.log(err));
  })


  return (
    <div className='d-flex justify-content-cent flex-column align-items-center mt-3'>
      <div>
          <h3>Name: {customer.Name}</h3>
          <h3>Email: {customer.Email}</h3>
      </div>
      <div>
          <button className='btn btn-primary me-2'>Edit</button>
      </div>
    </div>
  )
}

export default CustomerDetail