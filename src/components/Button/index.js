import { useContext } from 'react'
import { BUTTON } from './styles'
import AppContext from "../../context/AppContext";
export const Button = ({children, prod}) => {
    
    ///////////utilizamos el context para extraer la funcion
    const { agregarAlCarro } = useContext(AppContext)
    const clickAgregar = (prod) =>{
        agregarAlCarro(prod)
    }
    return (
        <BUTTON onClick={() => clickAgregar(prod)} >{children}</BUTTON>
    )
}
