import React  from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import srch from '../Config/Config';

export const Context = createContext();
  
const ContextProvider=(props)=>{
    const [weatherdata,setweatherdata]=useState("");
    const [input,setinput]=useState("");
    const[weatherimage,setweatherimage]=useState(null)
     const onsent=async(city)=>{
      
       let data= await srch(city);
       setweatherdata({
        humidity:data.main.humidity,
        temp:Math.floor(data.main.temp),
        visibility:data.visibility,
        winds:data.wind.speed,
        condition:data.weather[0].main,
        location:data.name,
        country:data.sys.country,
      })

       const url=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
       
       setweatherimage(url);
         setinput("");
        };
   

const Contextvalue = {
  onsent,
  input,
  setinput,
  weatherdata,
  weatherimage
  };

  return (
    <Context.Provider value={Contextvalue}>{props.children}</Context.Provider>
  )
};

export default ContextProvider;