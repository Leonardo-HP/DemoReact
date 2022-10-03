import React from 'react'

export const Comportamientos = () => {

    
    const enviarFormulario =(event)=>{
        event.preventDefault();
            console.log("se envio el formulario ")
    }
  return (
    <div>
<p>
Comportamientos
</p>

<form onSubmit={enviarFormulario}>
    <input placeholder='email'></input>
    <button type='submit'>Enviar formulario</button>
</form>


    </div>
    


  )
}

export default Comportamientos