import React, { useContext } from 'react';
import { CartContext } from '../Componentes/CartContext';

function CartSidebar() {

    const { buyAll, valorTotal } = useContext(CartContext);

    return (
          <button className="cartSidebar__buyAll" onClick={buyAll}>
              Comprar
          </button>
    )
}

export default CartSidebar