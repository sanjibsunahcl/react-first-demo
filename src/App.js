import { useState ,createContext} from "react";
import './App.css';
import MyForm from "./component/form/form";

export const UserContext = createContext();

function App() {

  const [name, setName] = useState("");
  const [visble, setVisible] = useState(true)
  const [value, setValue] = useState('Sanjib');


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
  return (
    <UserContext.Provider value={[visble, setVisible]}>
    <div className="App"> 
       { !visble ?
      <div>
        <h2>Hello World!</h2>
        <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>
        <button onClick={shoot}>click</button>
      </div>
      : null
      }
     { visble ? <MyForm></MyForm> : null } 
  </div>
  </UserContext.Provider>

  );
}


export default App;
