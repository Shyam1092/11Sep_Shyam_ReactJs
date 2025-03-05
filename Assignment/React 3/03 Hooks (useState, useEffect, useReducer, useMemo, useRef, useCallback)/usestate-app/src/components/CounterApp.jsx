import React, { useState } from 'react'

export default function CounterApp() {
    const [count,setCount]=useState(0);
  return (
    <div>
<h1>the intial value of counte :{count}</h1>
<button type='button' onClick={()=>setCount(count+1)}>+</button>
<button type='button' onClick={()=>setCount(count-1)}>-</button>
    
    </div>
  )
}
