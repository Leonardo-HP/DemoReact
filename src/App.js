import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Contacto from './components/Contacto/Contacto';
import AboutUs from './components/AboutUs/AboutUs';
import EventListener from './components/EventListener/EventListener';
import Comportamientos from './components/Comportamientos/Comportamientos/Comportamientos';
import Burbujeo from './components/Burbujeo/Burbujeo';
import Pagina404 from './components/Pagina404/Pagina404';
import CartContainer from './components/CartContainer/CartContainer';
import { ThemeContext } from './context/ThemeContext';
import { useState } from 'react';




function App() {
const[texto,setTexto] = useState("")

  return (
    <ThemeContext.Provider value={{texto:texto, setTexto, products:[1,2,3]}}>
   
    <BrowserRouter>  
      <div className="App">
              <div>  
              <NavBar></NavBar>
                     <Routes>
                        <Route path='/' element ={<ItemListContainer/> }/>
                        <Route path='/contacto' element ={<Contacto/> }/>
                        <Route path='/AboutUs' element ={<AboutUs/> }/>
                        <Route path='/productos/:categoryId' element ={<ItemListContainer/> }/>
                        <Route path ='/item/:productId' element={<ItemDetailContainer/>}/>
                        <Route path ='//event-listener' element={<EventListener/>}/>
                        <Route path ='//comportamientos-eventos' element={<Comportamientos/>}/>
                        <Route path ='//burbujeo' element={<Burbujeo/>}/>
                        <Route path ='/*' element={<Pagina404/>}/>
                        <Route path ='/item/*' element={<Pagina404/>}/>
                        <Route path ='/item/*/*' element={<Pagina404/>}/>
                        <Route path='/Cart' element={<CartContainer/>}/>
                      </Routes>   
              </div>
      </div>
    </BrowserRouter>
    
    </ThemeContext.Provider>

  );
}

export default App;
