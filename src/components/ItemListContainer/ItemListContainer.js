import data from "../mock-data";
import React, {useState,useEffect} from 'react';
import ItemList from "../ItemList/ItemList";

//Parametros
import {useParams} from "react-router-dom";


const ItemListContainer = ({greeting}) =>{

//parametros 

const{categoryId} =useParams();
console.log('categoryId',categoryId)


    const [items,setItems] = useState([]);

    const getData = new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve(data);

        },2000)
    });


    useEffect(()=>{
        getData.then((result)=>{

            // si hay un valor en categoryID si no que devuelva el default
            if(categoryId){
                const newProducts = result.filter(item=>item.category === categoryId)
                setItems(newProducts);

            }

            else{
                setItems(result)
            }


   
            console.log(result);
        });
    },[categoryId]);
  


    
return (

    <>
    {items.length>0 ? (


        <ItemList itemsList ={items}/>)  :  (  
            <div>Loading...</div>
        )
        
        
        }
       
    </>
)

}

export default ItemListContainer