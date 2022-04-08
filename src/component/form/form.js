import { 
  useState,
  useEffect,
  useContext } from "react";
import { UserContext } from "../../App";
import './form.css'


function MyForm() {
    const [inputs, setInputs] = useState({});

    const [visible, setVisible] = useContext(UserContext);

    // useEffect(()=>{
    //    alert(JSON.stringify(visible))
    // },[])

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(JSON.stringify(inputs));
      setVisible(false)
    }

  return (
    <div className="form">
        <h1>Enter your Details:-</h1>
      <form onSubmit={handleSubmit}>
        <div>
         <label>Enter your name: 
         <input
            className="inputStyle" 
            type="text" 
            name="username" 
            value={inputs.username || ""} 
            onChange={handleChange}
         />
      </label>
      </div>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          className="inputStyle" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <div>
        <label>Select Gender:
         <select 
             name="selectValue" 
             value={inputs.selectValue} 
             onChange={handleChange}>
             <option value="Select">Select</option>
             <option value="Male">Male</option>
             <option value="Female">Female</option>
       </select>
      </label>
      <div>
         <textarea placeholder='Enter desc'  
            name="desc" 
            value={inputs.desc}
            onChange={handleChange}
         > 
         </textarea>
     </div>
        </div>
        <div>
          <button type="submit" className='btnSubmit'>Submit</button>
        </div>
    </form>
    </div>  
  )
}

export default MyForm;
