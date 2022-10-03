import Item from "../Item/Item";

//importamos el item para usar con el map



const ItemList = ({itemsList}) => {
   


  //map recibe un callback
    return (
<>
  {itemsList.map((producto)=>{
            return (
            <Item
            key={producto.id}
            name={producto.name}
            description={producto.description}
            price={producto.price}
            image={producto.image}
            category={producto.category}
            id={producto.id}
           />
            );
            
         })}     
</>

    
  );
};

export default ItemList;