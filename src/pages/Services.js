import React from 'react';
import './services.css';
import { useNavigate } from 'react-router-dom';


export default function Services() {
  const navigate = useNavigate();
  return (
    <div className='serViceContainer'>
      <h1 className='services'>SERVICES</h1> 
      <button className='btnStyle' onClick={()=> navigate('/')}>Home</button>
    </div>
    );
  // return (
   
  //     <Cards />
   
    
  // );
}
