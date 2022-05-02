import React from 'react'
import Item from './Item'

function ItemList ({productos}) {

    return (
        productos.map ( p => (
            <Item
            id = {p.id}
            key ={p.itemId}
            pelicula = {p.pelicula}
            precio = {p.precio}
            imagen = {p.imagen}
            itemId = {p.itemId}
            categoryId = {p.categoryId}
            resumen = {p.resumen}
            />
        ) )

    )
}

export default ItemList