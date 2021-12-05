import {Span} from './styles'
export const Burbuja = ({ cantidad }) => {
   
    return (
        <Span >
            {cantidad > 9 ? '9+' : cantidad}
        </Span>
    )   
}