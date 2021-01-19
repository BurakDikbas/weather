import {createContext, useState, useEffect} from "react"
import axios from "axios"

const WeahterContext = createContext(null);

export const WeatherProvider = ({children})=> {
    const [selected, setSelected]= useState("İstanbul");
    const [weather, setWeather]= useState(null)

    useEffect (()=>{
        
       const url= `http://api.openweathermap.org/data/2.5/forecast/daily?q=${selected}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
       axios(url).then((res)=>(setWeather(res.data)));
    },[selected])
    
    const values= {
        selected,
        setSelected,
        weather
    }


return (
        <WeahterContext.Provider value={values}>
         {children}
        </WeahterContext.Provider>
        ) 
}
export default WeahterContext;