import { useState, useEffect } from 'react'
import AppContext from './AppContext'
import { dataProductos } from '../api/Data'



const AppState = ({children}) => {
    const [articulos, guardarArticulo] = useState([])
    const [ carrito, guardarCarrito ] = useState([])
    const [busqueda, guardarBusqueda] = useState([])
    useEffect(()=> {
       
        guardarArticulo(dataProductos)
        
        // eslint-disable-next-line
    }, [])
    
    
    
    ///agregando al carrito
    const agregarAlCarro = (producto) => {
        // 1- Verificar si el producto clickeado ya està en el carrito
        if (carrito.find(x => x.id === producto.id)) {
          // 2- En caso de ya estar en el carrito, aumentamos la cantidad en 1
          const carritoCopia = carrito.map(x => x.id === producto.id ? ({...x, cantidad: x.cantidad + 1}) : x)
          guardarCarrito(carritoCopia)
          
          return
        }
    
        guardarCarrito([...carrito, {...producto, cantidad: 1}])
      }
    
    ///eliminar compra
    const eliminarProducto = producto => {
        const nuevaLista = carrito.filter(item => item.id !== producto.id)
        guardarCarrito(nuevaLista)
    }

    // funcion para filtrar productos
    const filtrarProductos = valor =>{
        const array = articulos
        
        if(valor === '') return  guardarBusqueda([]);
        if(valor !== ''){
            const nuevoArray = array.filter(({ nombre }) => nombre.toLowerCase().includes(valor.toLowerCase()));
            guardarBusqueda(nuevoArray)
        } 
    }

    return (
        <AppContext.Provider
            value={{
                articulos: articulos,
                carrito: carrito,
                busqueda:busqueda,
                agregarAlCarro,
                eliminarProducto,
                filtrarProductos
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppState
