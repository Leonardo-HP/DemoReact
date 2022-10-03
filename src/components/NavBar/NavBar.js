import logoMoandala from '../NavBar/logoMandala.png'
import { Link, NavLink } from 'react-router-dom'


import './NavBar.css'
import CartWidgtet from '../CartWidget/CartWidgtet'


const NavBar =() =>{
    

    
    return(
        <div className='navbar-container' >
            <div>
            <a href="https://es.wikipedia.org/wiki/Mandala">
            <img widht= {'40px'}src={logoMoandala} alt="logoMandala" />   
            </a>

                
            </div>
            <div>
            
                <ul>
                    <li>
                    <NavLink className={({isActive})=>isActive? "classActive":"classInactive"} to='/'>Inicio</NavLink>
                    </li>
                    <li>
                    <NavLink className={({isActive})=>isActive? "classActive":"classInactive"} to='contacto'>Contacto</NavLink>
                    </li>
                    <li>
                    <NavLink className={({isActive})=>isActive? "classActive":"classInactive"}to='AboutUs'>About US</NavLink>
                    </li>
                    <li>
                    <NavLink className={({isActive})=>isActive? "classActive":"classInactive"}to='/productos/Domestico'>Domestico</NavLink>
                    </li>
                    <li>
                    <NavLink className={({isActive})=>isActive? "classActive":"classInactive"}to='/productos/Salvaje'>Salvaje</NavLink>
                    </li>
                    
                    <li>
                    <NavLink className={({isActive})=>isActive? "classActive":"classInactive"}to='/event-listener'>Event Listener</NavLink>
                    </li>

                    <li>
                    <NavLink className={({isActive})=>isActive? "classActive":"classInactive"}to='/comportamientos-eventos'>Comportamientos</NavLink>
                    </li>

                    <li>
                    <NavLink className={({isActive})=>isActive? "classActive":"classInactive"}to='/burbujeo'>Modalsu</NavLink>
                    </li>
                    

                    <li>
                    <NavLink className={({isActive})=>isActive? "classActive":"classInactive"}to='/burbujeo'>Modalsu</NavLink>
                    </li>
                    
                    
                    
                </ul>
            </div>
            <div>
                <CartWidgtet/>
            </div>
        </div>
    )
}

export default NavBar

