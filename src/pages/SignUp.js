import React, { useEffect, useState } from 'react';
import '../App.css';

export default function SignUp() {

  const [color, setColor] = useState('red');

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setColor('black');
    } else {
      setColor('white');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground, true);
    return () => window.removeEventListener('scroll', changeBackground);
  }, []);



  return (  
    <div>
       <h1 style={{color:color}} onMouseMove>Sign Up</h1>
       {/* <text>ghdsghhgh</text>  */}
       <div>
      <h4 className={color}>Brand</h4>
      </div>
    </div>
  );
}
