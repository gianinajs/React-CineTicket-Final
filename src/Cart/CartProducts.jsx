import React from 'react'
import CartProduct from './CartProduct'

function CartProducts({cart}) {
  return (
    <>
      <div className="carritoProductos">
        <table className="table table-striped">
            <thead>
                    <tr>
                    <th scope="col">Imagen</th>
                    <th scope="col">Título</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cant.</th>
                    <th scope="col">Subtotal</th>
                    </tr>
            </thead>
            <tbody>
              {cart.map((producto) => (
                   <CartProduct key={producto.id} producto={producto} />))}
            </tbody>
        </table>
      </div>
    </>
  )
}

export default CartProducts