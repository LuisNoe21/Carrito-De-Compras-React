import React, { useState, useRef, useContext } from 'react'
import { Contenedor, Input } from './styles'
import AppContext from '../../context/AppContext'

const Buscador = () => {
    const [buscar, Guardar] = useState('')
    const reference = useRef(null);
    const { filtrarProductos } = useContext(AppContext)
    const handleChange = () =>{
        Guardar(reference.current.value)
        filtrarProductos(reference.current.value)
    }
    
    return (
        <Contenedor>
            <Input
                type='text'
                name='buscar'
                value={buscar}
                onChange={handleChange}
                ref={reference}
                placeholder='Busca tus Articulos'
            />
        </Contenedor>
    )
}

export default Buscador
