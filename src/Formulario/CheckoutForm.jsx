import React from 'react'
import Button from 'react-bootstrap/Button'

function CheckoutForm({address, name, phone, email, setName, setAddress, setPhone, setEmail, sendOrder}) {
  return (
    <>
        <div className='formOrder'>
            <h1 className='ordenCompra'>Orden de Compra</h1>
            <form onSubmit={(e) => { e.preventDefault(); sendOrder() }}>
            <div className="row">
                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      placeholder="Nombre y apellido"
                      value={name}
                      onChange={(e) => { setName(e.currentTarget.value) }}
                      required
                    />
                    <label htmlFor="nombre">Nombre y apellido</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="telefono"
                      placeholder="Teléfono"
                      value={phone}
                      onChange={(e) => { setPhone(e.currentTarget.value) }}
                      required
                    />
                    <label htmlFor="telefono">Teléfono</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="E-mail"
                      value={email}
                      onChange={(e) => { setEmail(e.currentTarget.value) }}
                      required
                    />
                    <label htmlFor="email">E-mail</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="direccion"
                      placeholder="Direccion"
                      value={address}
                      onChange={(e) => { setAddress(e.currentTarget.value) }}
                      required
                    />
                    <label htmlFor="direccion">Dirección</label>
                  </div>
                </div>
                </div>
                <Button type="submit" variant="warning" className='producto__ver'>Finalizar</Button>
            </form>
        </div>
    </>
  )
}

export default CheckoutForm