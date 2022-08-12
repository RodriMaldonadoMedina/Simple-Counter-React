import React, { useEffect, useState } from "react";

import Card from "./Card.jsx";

//create your first component
const Cuenta = () => {
    const [seconds, setSeconds] = useState(0);
    const [texto, setToString] = useState([]);
    const [intervalID, setIntervalID] = useState(0);

	  useEffect(()=>{
      let newIntervalID = setInterval(()=>{
        setSeconds(seconds => seconds+1)},1000);
      setIntervalID(newIntervalID);
      return stopInterval
      }
      ,[])

    const stopInterval = ()=>{
      clearInterval(intervalID);
      setIntervalID(0);
    }

    useEffect(()=>{
      setToString(seconds.toString().split("").reverse());
    },[seconds])

    
    //Funcionalidad de los botones

    const resetCount = ()=>{
      stopInterval();
      setSeconds(0);
    }

    const stopCount = ()=>{
      stopInterval();
    }

    const continueCount = ()=>{
      stopCount();
      let newIntervalID = setInterval(()=>
          { setSeconds(seconds  => seconds + 1 ) }
          ,1000);
      setIntervalID(newIntervalID); 
    }

    //A renderizar

    return (
      <div className="container p-0 text-center my-4">
        <div className="d-flex mb-3">
          <i className="fa-solid fa-clock fs-50 myClock"></i>
          <Card text={texto[5]}/>  
          <Card text={texto[4]}/>
          <Card text={texto[3]}/>
          <Card text={texto[2]}/>
          <Card text={texto[1]}/>
          <Card text={texto[0]}/>
        </div>
        <div className="container d-flex justify-content-start">
          <button className="btn btn-danger mx-2 border" onClick={resetCount}>Reset Count</button>
          <button className="btn btn-success mx-2 border" onClick={continueCount}>Start/Continue Count</button>
          <button className="btn btn-secondary mx-2 border" onClick={stopCount}>Stop Count</button>
        </div>
    </div>
    )
}

export default Cuenta;