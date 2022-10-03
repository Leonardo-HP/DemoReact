

import { useState,useEffect } from "react";

import data from "../mock-data";
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom";

//Parametros



export const ItemDetailContainer = () =>{

//parametros 

const{productId} =useParams();
console.log('productId',productId)


const [item,setItem] = useState([]);

    const getItem = ((id)=>{   
   
   return new Promise((resolve,reject) =>{


    const item = data.find(item=>item.id === parseInt(id));

            resolve(item)
   
   
          })
  }
    )
useEffect(()=>{
  const getProducto = async()=>{
    const producto = await getItem(productId);
    console.log ('producto', producto)
    setItem(producto);
      }
      getProducto();

    },[productId])
 



console.log('item'.item)
return(
      <div className="item-detail-container">

<ItemDetail item={item}/>
        
      </div>
)
}
export default ItemDetailContainer 