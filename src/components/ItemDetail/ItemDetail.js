import { isDocument } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import { Link } from "react-router-dom";



import { ItemCount } from "../ItemCount/ItemCount";


export const ItemDetail =({item}) =>{

  const [isCount,setIsCount] = useState(false)
  const [contador,setContador] = useState(0);

const onAdd = (count) =>{
  console.log("Recibimos",count)
  setContador(count)
  setIsCount(true)
}


return(

  
<div className='detail-containter'>
    <p style={{ width: "100%" }}>item detail</p>
    <div className='image-container'>
      <img src={item.image} alt={item.name} />
    </div>

  <div>
    <h4>{item.name}</h4>
    <h5>$ {item.price}</h5>
    <h6>{contador}</h6>
  </div>
  
    {
        isCount ?
        <>
            <h6>gracias por su compra</h6>
            <Link to= '/'>Continuar comprando</Link>
            
        </>
        :
        <>
  <ItemCount stock={10} initial={1} onAdd={onAdd} />
  </>

    }


  

</div>

)
}

export default ItemDetail;