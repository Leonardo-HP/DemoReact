
import { Link } from "react-router-dom";


import './Item.css'

const Item = ({id,image,name,category,description,price,stock}) => {

        return (
          <div className="item-container">
                    
                    <img src={image} alt={image}></img>
                    <h1>{name}</h1>
                    <h2>{category}</h2>
                    <p>{description}</p>
                    <p>{price}</p>  
                    <p>{stock}</p> 
                    <p>{id}</p> 

          <Link to={`/item/${id}`}>

            <button className='boton-ver'>Ver detalle...</button>

            </Link>  



    </div>
)
}





export default Item

