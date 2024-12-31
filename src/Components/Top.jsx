import React, { useEffect } from "react";
import "./Top.css";
import { useContext } from "react";
import { Context } from "../Context/Context";
import { useState } from "react";

const Top = () => {
  const{onsent,input,setinput,weatherdata,weatherimage}=useContext(Context);
  const [time,settime]=useState(new Date())
  const [url,seturl]=useState("")
  const f=new Intl.DateTimeFormat("en-us",{
    dateStyle:"full",
  })

   useEffect(()=>{
   setInterval(() => settime ((new Date()),1000))
   },[])
  return (
    <>
      <div className="container">
        <div className="center">
          <div className="centerin">
            <div className="centerleft">
              <div className="place">{weatherdata.location}</div>
              <div className="last">
                <div className="date">
                  <p id="p1">{time.toLocaleTimeString()}</p>
                  <p id="p2">{f.format(time)}</p>
                </div>
                <div className="temp">{weatherdata.temp}°c</div>
              </div>
            </div>
            <div className="centerright">
              <div className="rightcontent">
                <div className="animation">
                  <div className="sun">
                <img  id="ani" src={weatherimage} alt="" /></div>
                </div>
                <div className="condition">
                  <p>{weatherdata.condition}</p>
                </div>
                <div className="search">
                  <input type="text" placeholder="search any city" onChange={(e)=>setinput(e.target.value)} value={input}></input>
                  <div className="icon" onClick={()=>onsent(input)}></div>
                </div>
                <div className="location">
                  <p>{weatherdata.country}</p>
                </div>
                <div className="temperature">
                  <p>Temperature</p>
                  <p>{weatherdata.temp}°c ({weatherdata.condition})</p>
                </div>
                <div className="humidity">
                  <p>Humidity</p>
                  <p>{weatherdata.humidity}%</p>
                </div>
                <div className="visibility">
                  <p>Visibility</p>
                  <p>{weatherdata.visibility} m</p>
                </div>
                <div className="wind">
                  <p>Wind Speed</p>
                  <p>{weatherdata.winds} m/sec</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Top;
