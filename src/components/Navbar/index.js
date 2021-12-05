import { useContext } from 'react'
import { Carro } from '../Carro'
import Buscador from '../Buscardor';
import {Nav, Img} from './styles'
import AppContext from "../../context/AppContext";
import carro from "../../assets/imagenes/carro.png"



export const Navbar = () => {
    
    const { carrito, eliminarProducto } = useContext(AppContext)
   
    let cantidad = carrito.reduce((acum, actual) => acum + actual.cantidad, 0)
    return (

        <>
        <Nav color='red'>
            
        
            <Img src={carro} alt="carro" />
            <p>Luis Noe Rodriguez</p>
            
            
            <Buscador/>
            <Carro cantidad={cantidad} productos={carrito} eliminarProducto={eliminarProducto} />
        </Nav>
        </>
    )
}