
import React,{useState,useEffect} from 'react'
import loaderImg from '../loader2.gif'
export default function LoaderApp() {
//destructuring of data
const[loader,setLoader]=useState(true);
useEffect(()=>{
setTimeout(()=>{
setLoader(false);
},2500)    
},[loader])

return (
loader ? 
<>
<img src={loaderImg} alt='img'  />
</>
: 
<>
<div>
<h1 align='center'>Great we are comming Soon!</h1>
</div>
</>
)
}
