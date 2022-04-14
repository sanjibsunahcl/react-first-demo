import React from 'react';
import '../App.css';
import MainWeather from '../component/weather/MainWeather';
import useFetch from '../utils/api';

export default function Products() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  console.log('api Response data'+JSON.stringify(data));

  return (
    <div>
     {/* <h1 className='products'>PRODUCTS</h1> */}
     <MainWeather/>
   </div>
   );
}
