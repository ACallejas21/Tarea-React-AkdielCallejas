import { useContext } from "react";
import { Boton } from "./styles"
import { CarritoContext } from '../../Context/carroContext'

export const Button = ({children, prod}) => {

    const carritoContext = useContext(CarritoContext);
    const {agregarAlCarro} = carritoContext;


    return (
        <Boton onClick={() => agregarAlCarro(prod)}>{children}</Boton>
    )
}
