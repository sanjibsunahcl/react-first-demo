import { useState ,createContext} from "react";
import './App.css';
import MyForm from "./component/form/form";
import MainWeather from "./component/weather/MainWeather";

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
  return (
    <UserContext.Provider value={[visble, setVisible]}>
      <div className="App"
         style={myStyle}
        > 
       { !visble ?
      <div>
        <h2>Hello World!</h2>
        <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>
        <button className="btnStyle" onClick={shoot}>Form</button>
        <div>
          <button className="btnStyle"
             onClick={()=>setWeatherVisible(true)}>Weather</button>
        </div>
      </div>
      : null
      }
     { visble ? <MyForm></MyForm> : null } 
     {weatherVisible ? <MainWeather/> : null}
      <div className="view"></div>
  </div>
  </UserContext.Provider>

  );
}


export default App;
