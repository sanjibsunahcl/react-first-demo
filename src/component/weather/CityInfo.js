import React, { useState, useEffect } from 'react';
import { MapPin ,Coffee, Search} from 'react-feather';
import { useStateValue } from '../../store';
import { getWeather, KEY, updateWeather } from '../../reducers';
import './Weather.css'

const CityInfo = () => {
    const [currentCity, setCurrentCity] = useState('');
    const [{city, latitude, longitude}, dispatch] = useStateValue();    

    useEffect(() => {
        setCurrentCity(city);
    }, [city]);

    /**
     * Use click on the location button to see the weather
     * at current location
     */
    const defaultLocation = () => {
        let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${KEY}`;
        getWeatherData(api);
    };

    /**
     * Key up event to capture keyboard
     * Firing to update the city in the store if the key is Enter
     */
    const onCityChange = (event) => {
        // if (event.keyCode === 13) {
            // event.preventDefault();           
            let api = `http://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${KEY}`;    
            getWeatherData(api);
        // }
    };

    const getWeatherData = (api) => {
        getWeather(api)
        .then((data) => {    
            setCurrentCity(data.name); 
            updateWeather(dispatch, data);
        })
        .catch (e => {            
            dispatch({
                type: "SET_ERROR",
                payload: {
                    error: e,
                    city: currentCity
                }
            }); 
        }); 
    };

    /**
     * Handle the input change
     */
    const handleChange = (event) => {
        setCurrentCity(event.target.value);
        event.preventDefault();  
        // onCityChange(event);
    }

    return (
        <div className="app-title">
            <text>Weather Info</text>
            <div className='boxstyle'>
            <input type="text" placeholder="Enter the city" 
            //   autoComplete="on" 
              onChange={handleChange}
              value={currentCity} 
            // onKeyUp={onCityChange}
             />
               <Search onClick={onCityChange} className='search'/>
             </div>
            <div className="location-icon" onClick={defaultLocation}>
                <MapPin />
            </div>        
        </div>
    )
}

export default CityInfo;
