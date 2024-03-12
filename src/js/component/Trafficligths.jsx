import React, { useState, useEffect, useRef } from "react";
import Light from "./ligths";
import Button from "./button";


let colors=["red", "yellow", "green"]

const TrafficLight = () => {
    
  
   const [color, setColor] = useState("");
   const [timer,setTimer]=useState(false);
   const [blueColor,setBlueColor]=useState(false)
   
   const trafficLightChanger = (lightClass, ligthColor) => {
    return lightClass + (color == ligthColor ? "selected" : "");
  };
  
  const changeColor=()=>{
    if(color==="red"){setColor("yellow")}
    if(color==="yellow" || color===""){setColor("green")}
    if(color==="green" && blueColor===false){setColor("red")}
    if(color==="green" && blueColor===true){setColor("blue")}
    if(color==="blue"){setColor("red")}
  }

  useEffect(()=>{
    if (timer)
    setTimeout(changeColor, 1000);
  },[color])
  
  
   const TraffictTimer=()=>{
      setTimeout(changeColor,1000)
      setTimer(true)
  }
  const trafficStoper=()=>{
    setTimer(false);
  }
  
  const blueLight=()=>{
    return blueColor==true ? "blue" : "invi"
  }



  
    return (
      <div>
        <div className="container bg-dark p-3 rounded">
          <Light
            ligthClass={trafficLightChanger("light red ", "red")}
            selector={() => setColor("red")}
          />
          <Light
            ligthClass={trafficLightChanger("light yellow ", "yellow")}
            selector={() => setColor("yellow")}
          />
          <Light
            ligthClass={trafficLightChanger("light green ", "green")}
            selector={() => setColor("green")}
            
          />
            <Light
            ligthClass={trafficLightChanger("light blue ", "blue")}
            selector={() => setColor("blue")}
            ligthId={blueLight()}
          />
        </div>
        <div className="text-center">
        <Button  name="Auto Lights" color="btn btn-primary" selector={()=>TraffictTimer()} />
        <Button name="Stop Ligths" color="btn btn-danger" selector={()=>trafficStoper()}  />
        <Button name="Add Blue" color="btn btn-secondary" selector={()=>setBlueColor(true)} />
        <Button name="remove blue" color="btn btn-warning" selector={()=>setBlueColor(false)} />
        </div>
      </div>
    );
  };


export default TrafficLight;
