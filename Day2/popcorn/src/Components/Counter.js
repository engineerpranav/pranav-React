import React from 'react'
import { useState } from 'react';

function Counter() {

    const [state,setState]=useState(1);

    const handle1=()=>{
        
        setState(state+1);

    }
    const handle2=()=>{
        
      setState(state-1);
    }

  return (
    <div>

        <h1>{state}</h1>
        <button  disabled={state>=5?true:false} onClick={handle1} >Increament</button>
        <button disabled={state<=0?true:false}  onClick={handle2}>Decreament</button>

    </div>
  )
}

export default Counter