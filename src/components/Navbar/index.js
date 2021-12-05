import { useContext } from 'react'
import { Carro } from '../Carro'
import Buscador from '../Buscardor';
import {Nav} from './styles'
import AppContext from "../../context/AppContext";

export const Navbar = () => {
    
    const { carrito, eliminarProducto } = useContext(AppContext)
   
    let cantidad = carrito.reduce((acum, actual) => acum + actual.cantidad, 0)
    return (
        <Nav color='red'>
            <p>Logo</p>
            <Buscador/>
            <Carro cantidad={cantidad} productos={carrito} eliminarProducto={eliminarProducto} />
        </Nav>
    )
}