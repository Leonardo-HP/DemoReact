import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



export const EventListener = () => {


const [isMobile,setIsMobile]=useState(false);


const hacerClick =(event)=>{
        console.log("click",event)
}


const cambiarFn =()=>{
    console.log("Alguien esta tecleando")
}

const checkResolution = ()=>{
console.log(window.innerWidth)
    if (window.innerWidth<800){
    setIsMobile(true)

   } else {
       setIsMobile(false)
   }
}

   useEffect(()=>{
        window.addEventListener("click",hacerClick)
        return()=>{
            console.log("event listener desmontado")
            window.removeEventListener("click",hacerClick);
        }
    },[])

useEffect(()=>{
        window.addEventListener("load",checkResolution);
        return()=>{
            console.log("event listener desmontado")
            window.removeEventListener("load",checkResolution);
        }   
},[])

    
return (
    <div>
   
    <p>EventListener</p>
    <button onClick={hacerClick}> Hacer Click</button>
    <input onChange={cambiarFn} placeholder='email'></input>
    {
        isMobile ? 
            <p>estas en mobile</p> 
            :
            <p>estas desde un PC</p>
    }
 </div>
  )

}

export default EventListener