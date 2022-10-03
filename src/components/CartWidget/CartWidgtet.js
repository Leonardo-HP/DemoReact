import React from 'react'
import imagenCarrito from '../CartWidget/imagenCarrito.png'
import { Link } from 'react-router-dom'


const CartWidgtet = () => {
  return (


    <div>
    <Link to="/Cart">
    <img src={imagenCarrito} alt="carrito" style={{width:20}}/>
    <span style={{backgroundColor: "white",borderRadius:"50%",widht:"10px",
    height:"10px",fontSize:"10px",color:'black'}}></span>
    <div>CartWidgtet</div>
    </Link>
    </div>
  )
}

export default CartWidgtet