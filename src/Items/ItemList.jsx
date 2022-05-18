import React from 'react'
import Item from './Item'

function ItemList ({productos}) {

    return (
        <div className="col-md-9 productos" id="listadoProductos">
            {productos.map ( p => (
                <Item
                id = {p.id}
                key ={p.itemId}
                pelicula = {p.pelicula}
                precio = {p.precio}
                imagen = {p.imagen}
                itemId = {p.itemId}
                categoryId = {p.categoryId}
                resumen = {p.resumen}
                categoria = {p.categoria}
                />
            ) )}
        </div>

    )
}

export default ItemList