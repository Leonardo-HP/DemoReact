import React, { useState } from 'react'
import './Burbujeo.css'

const Burbujeo = () => {
const[openModal,setOpenModal] = useState(false);


const showModal =()=> {
    setOpenModal(!openModal)
    
}

const detenerPropagacion=(event)=>{
    event.stopPropagation()

}

  return (
    <div>

        <button onClick={showModal}>Modal</button>
        {
            openModal ?
            <div className='background-modal' onClick={showModal}>


            <div className='modal' onClick={detenerPropagacion}>
                modal
                <p>hacer click fuera del recuadro para cerrar</p>
{/* 
                <button onClick={showModal}> cerrar</button> */}
             
            </div>


                
            </div>
            :
            null
        }


        
    </div>
  )
}

export default Burbujeo