import React,{useContext, useRef, useState} from 'react'
import { Articulo } from "../Articulo"
import { Container , Div } from "./styles"
import { CarritoContext } from '../../Context/carroContext'
import { Boton } from '../Button/styles'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

export const Articulos = (props) => {
    // const productos = props.data.articulos
    // const agregarAlCarro = props.agregarAlCarro

    const carritoContext = useContext(CarritoContext);
    const {getData} = carritoContext;

    const productos = getData()

    const usuario = useRef()
    
    const [nombre, setnombre] = useState("");
    const handlerUsuario = () => {
        if(usuario.current.value){
            setnombre(usuario.current.value)
        }else{
            setnombre("")
        }
    }
    return (
        <>
         <Div>
             <h3>nombre de usuario: </h3>
                <input ref={usuario} type="text" ></input>
                <Boton onClick={handlerUsuario}>Click</Boton>
            <h3>{nombre}</h3>
        </Div>
        <Container>
           
            {
                productos.articulos.map(prod => 
                    // <Articulo nombre={prod.nombre} precio={prod.precio} imagen={prod.imagen} />
                    <Articulo key={prod.id} prod={prod}/>
                )
            }
        </Container>
        </>
    )   
}