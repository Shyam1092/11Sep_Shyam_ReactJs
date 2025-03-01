import React,{useState} from 'react'

export default function CounterApp() {
    const[count,setCount]=useState(0);
  return (
    <div>
        <h1>The initial values of Count is :{count}</h1>
        <button type='button' onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}