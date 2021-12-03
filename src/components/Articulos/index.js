import { useContext } from 'react'
import { Articulo } from "../Articulo";
import { Container } from './styles';
import AppContext from "../../context/AppContext";

export const Articulos = () => {

    const { articulos, busqueda } = useContext(AppContext)
    console.log(busqueda.length)
    const arrayProductos = busqueda.length === 0 ? articulos : busqueda
    return (
        <Container >
            {
                arrayProductos.map(prod => 
                    // <Articulo nombre={prod.nombre} precio={prod.precio} imagen={prod.imagen} />
                    <Articulo
                        key={prod.id}
                        prod={prod}
                    />
                )
            }
        </Container>
    )
}