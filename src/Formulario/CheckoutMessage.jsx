import React from 'react'

function CheckoutMessage({OrderId}) {
  return (
    <div className='ordenFinal'>Tu número de compra es: {OrderId}</div>
  )
}

export default CheckoutMessage