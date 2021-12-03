import { Button } from '../Button'
import { Container, Image, ProductName, Price } from './styles'

export const Articulo = ({prod}) => {
   
    return (
        <Container nombre={prod.nombre}>
            <Image imagen={prod.imagen} />
            <ProductName>{prod.nombre}</ProductName>
            <Price>${prod.precio.toLocaleString()}</Price>
            <Button prod={prod}>Add To Cart</Button>
        </Container>
    )
}