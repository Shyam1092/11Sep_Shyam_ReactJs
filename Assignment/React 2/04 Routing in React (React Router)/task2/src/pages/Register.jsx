import React from 'react'
import { Row } from 'react-bootstrap'

export default function Register() {
  return (
    <div className='container shadow p-3 mt-5 w-75'>
      <Row>
      <div className='col-md-6'>
        <img src="https://static.wixstatic.com/media/0a5522_75a9753a6fe24179a272b1e56fb95826~mv2.gif"  alt="" className='img-fluid' />
      </div>
      <div className='col-md-6'>
    <input type="text" placeholder='Enter your name' />  <br/><br/>

    <input type="text" placeholder='Enter your Email' />  <br/> <br/>
      
    <input type="text" placeholder='Enter your Password' /> <br/><br/> 
      
    <input type="text" placeholder='Enter your number' />  
      </div>
</Row>
    </div>
  )
}
