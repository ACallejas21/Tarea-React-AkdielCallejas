import React,{ useState , useContext} from 'react'
import { Burbuja } from '../Burbuja'
import {CarroContenedor, Carito, ListaArticulos, Ul, Li, DeleteButton} from './styles'
import { CarritoContext } from '../../Context/carroContext'

export const Carro = () => {
    const [mostrarCarro, setMostrarCarro] = useState(false)

    const carritoContext = useContext(CarritoContext);
   const {getCantidadCarro, getData,eliminarDelCarro} = carritoContext;

    const handleMostrarCarro = _ => setMostrarCarro(!mostrarCarro)

    let productos = getData()

    let subTotal = productos.articulos.reduce((acum, prod) => (prod.cantidad * prod.precio) + acum, 0)
    let impto = subTotal * 0.15
    let totalPagar = subTotal + impto

    let cantidad = getCantidadCarro()
    

    const handelEliminarProductos = (id) => {
        let respueta = window.confirm("Estas seguro de eliminar el producto")
        if (respueta){
            eliminarDelCarro(id)
        }
    }
  

    return (
        <CarroContenedor>
            {cantidad > 0 && <Burbuja cantidad={cantidad} />}
            <Carito onClick={handleMostrarCarro}>
                Carro
            </Carito>
            {
                (cantidad > 0 && mostrarCarro) && 
                    <ListaArticulos>
                        <Ul>
                            {
                                productos.carrito.map(x => {
                                    return (
                                        <Li key={x.id}>
                                            <img height={25} alt={x.nombre} src={x.imagen} />
                                            <span><DeleteButton onClick={() => handelEliminarProductos(x.id)}>X</DeleteButton>{x.nombre}</span>
                                            <span>
                                                ({x.cantidad} x {x.precio.toLocaleString()}) = <strong>{(x.cantidad * x.precio).toLocaleString()}</strong>
                                            </span>
                                        </Li>
                                    )
                                })
                            }
                            <Li>
                                <strong>Sub total</strong>
                                <strong>{subTotal.toLocaleString()}</strong>
                            </Li>
                            <Li>
                                <strong>Impuesto</strong>
                                <strong>{impto.toLocaleString()}</strong>
                            </Li>
                            <Li>
                                <strong>Total a pagar</strong>
                                <strong>{totalPagar.toLocaleString()}</strong>
                            </Li>
                        </Ul>

                    </ListaArticulos>
            }
        </CarroContenedor>

    )
}