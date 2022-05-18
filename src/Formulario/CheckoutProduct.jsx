import React from 'react'
 
function CheckoutProduct({item}) {
    
    return (
        <>
        <div className='compraOrder1'>
            <p className=''>{item.pelicula}</p>
            <p className=''>Cantidad: {item.count}</p>
            <p className=''>Total: ${item.precio * item.count}</p>
        </div>
        </>
    )
  }
  
  export default CheckoutProduct