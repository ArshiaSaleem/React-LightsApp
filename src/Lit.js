import React, { useState } from 'react';
import './Lit.css';

function Lit() {
  const [whatState, setState] = useState("off")
  var [temp, setTemp] = useState(22)
 
  const brightedness = `${whatState}`

  return (
    <div className = {`Lit ${brightedness}`}>

    <h2>Press ON/OFF button to switch between lights</h2>
    
    <button onClick={ () => setState("on")} value="on">ON</button><br/>

    <button onClick={ () => setState("off")} value="off">OFF</button>
     
    <h2>The temperature is {temp} celsius </h2>

    <button className="temp" onClick={ () => setTemp(++temp)} value="on">Increase Temp</button><br/>

    <button className="temp" onClick={ () => setTemp(--temp)} value="off">Decrease Temp</button>
     

  </div>
  )   
}

export default Lit;
