import { useState ,createContext} from "react";
import './App.css';
import MyForm from "./component/form/form";
import MainWeather from "./component/weather/MainWeather";

import Home from './pages/Home';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Services from './pages/Services';
import Products from './pages/Products';
import SignUp from './pages/SignUp';
import Navbar from './component/Navbar';
import HeroSection from "./component/HeroSection";


export const UserContext = createContext();

function App() {

  const [name, setName] = useState("");
  const [visble, setVisible] = useState(false)
  const [value, setValue] = useState('Sanjib');
  const [weatherVisible,setWeatherVisible] = useState(false)


  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }

 const hideWaetherVisible = () => {
      setWeatherVisible(false)
 } 

  const x = 5;
  const shoot = () => {
    // alert("Great Shot!");
    setVisible(true);
  }
  const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
  ];
  const myStyle={
    backgroundImage: 
    "url('https://asia.olympus-imaging.com/content/000090033.jpg')",
    // height:'100vh',
    // marginTop:'-70px',
    fontSize:'30px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
  // return (
  //   <UserContext.Provider value={[visble, setVisible]}>
  //     <div className="App"
  //        style={myStyle}
  //       > 
  //      { !visble ?
  //     <div>
  //       <h2>Hello World!</h2>
  //       <h1>{(x) < 10 ? "Sanjib" : "Goodbye"}</h1>
  //       <button className="btnStyle" onClick={shoot}>Form</button>
  //       <div>
  //         <button className="btnStyle"
  //            onClick={()=>setWeatherVisible(true)}>Weather</button>
  //       </div>
  //     </div>
  //     : null
  //     }
  //    { visble ? <MyForm></MyForm> : null } 
  //    {weatherVisible ? <MainWeather hideWeather= {hideWaetherVisible} data={'X'}/> : null}
  //     <div className="view"></div>
  // </div>
  //   </UserContext.Provider>
//   );
return (
  <Router>
      <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path='/services' element={<Services />} />
      <Route path='/products'  element={<Products />} />
      <Route path='/sign-up'  element={<SignUp/>} />
    </Routes>
  </Router>
);
}


export default App;
