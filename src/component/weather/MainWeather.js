import { useEffect, useState } from "react";
import { getWeather, KEY, updateWeather } from "../../reducers";
import { useStateValue } from "../../store";
import CityInfo from "./CityInfo";
import Notification from './Notification'
import WeatherInfo from './WeatherInfo'
import './Weather.css'

const MainWeather = (props) => {
    const [{error}, dispatch] = useStateValue();  

    useEffect(() => {     
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {  
          let payload = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          };
          dispatch({
            type: "SET_LOCATION",
            payload
          });
          let url = `http://api.openweathermap.org/data/2.5/weather?lat=${payload.latitude}&lon=${payload.longitude}&appid=${KEY}`;
          console.log('url'+url);
          getWeather(url)
          .then((data) => {
            updateWeather(dispatch, data);          
          })
          .catch (e => {            
              dispatch({
                type: "SET_ERROR",
                payload: {
                  error: e
                }
              });
          });                   
        }, (error) => {  
          dispatch({
            type: "SET_ERROR",
            payload: {
              error
            }
          });              
        });
      }
    }, []);  
  
    return (    
      <div className="app"> 
        <button className="close" onClick={()=>props.hideWeather()}>{props.data}</button>     
        <CityInfo />
        {error && <Notification />}
        {!error && <WeatherInfo />}
        {/* <h1>Sanjib</h1> */}
      </div>
    );
};

export default MainWeather;
