import React from 'react';
import './services.css';
import { useNavigate } from 'react-router-dom';
import CardItem from '../component/CardItem';


export default function Services() {

  console.log('home data check');

  const navigate = useNavigate();
  return (
    
    <div className='serViceContainer'>
      <h1 className='services'>SERVICES List</h1> 
      <button className='btnStyle' onClick={()=> navigate('/')}>Home</button>
        <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
          />

          <p>.</p>
          <h1>.</h1>
    </div>
    );
  // return (
   
  //     <Cards /> 
  // );
}
