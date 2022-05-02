import { createContext, useEffect, useState } from "react";
import productos from "../utils/productos";


export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart , setCart] = useState ([]);
    
    const addToCart = (item) => {
      
        const indexPelis = cart.findIndex((cartItem) => cartItem.id === item.id);
        if (indexPelis !== -1) {
          const newCart = [...cart];
          newCart[indexPelis].count = newCart[indexPelis].count + item.count;
          setCart(newCart);
        } else {
          setCart([...cart, item]);
        }
      };


    const removeFromCart = (id) => {
        setCart(cart.filter((producto) => producto.id !== id));
    };

    const buyAll = () => setCart([]);

    const cantidadTotal = cart.reduce((total, producto) => total + producto.count, 0);
    const valorTotal = cart.reduce((total, producto) => total + (producto.count * producto.precio), 0);

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, buyAll, cantidadTotal, valorTotal }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider