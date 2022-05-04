import React from 'react'
import Button from 'react-bootstrap/Button'

function CheckoutForm({name, phone, email, setName, setPhone, setEmail, sendOrder}) {
  return (
    <>
        <div className='formOrder'>
            <h1 className='ordenCompra'>Orden de Compra</h1>
            <form onSubmit={(e) => { e.preventDefault(); sendOrder() }}>
                <input className="form-control" id="exampleFormControlInput1" type="text" name='name' placeholder='Nombre' value={name} onChange={(e) => { setName(e.currentTarget.value) }} required/>
                <input className="form-control" id="exampleFormControlInput1" type="text" name='phone' placeholder='Telefono' value={phone} onChange={(e) => { setPhone(e.currentTarget.value) }} required/>
                <input className="form-control" id="exampleFormControlInput1" type="text" name='email' placeholder='Email' value={email} onChange={(e) => { setEmail(e.currentTarget.value) }} required/>
                <Button type="submit" variant="warning">Finalizar</Button>
            </form>
        </div>
    </>
  )
}

export default CheckoutForm