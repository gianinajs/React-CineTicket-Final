import React, { useContext } from "react";
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Icon from "./CartWidget.jsx";
import hoyts from "../img/hoyts.png"
import { Link } from "react-router-dom";
import { CartContext } from './CartContext'


export default function MyNavBar () {

    let { cantTotal } = useContext (CartContext)
    return (
        <>
          <Navbar bg="dark" variant="dark">
          <div className="col-md-3 middle__logo">
              <Link to="/"><img src="/logo.png" alt="Logo" /></Link>
          </div>
              <Container className="navBar">
              <Nav className="me-auto">
                  <Link className="navOpcion" to="/">Home</Link>
                  <Link className="navOpcion" to="category/Ficcion">Ficcion</Link>
                  <Link className="navOpcion" to="category/Drama">Drama</Link>
                  <Link className="navOpcion" to="category/Terror">Terror</Link>
                  <Link className="navOpcion" to="category/Aventura">Aventura</Link>
                  <Link className="navOpcion" to="sedes">Sedes</Link>
                  <Link className="navOpcion" to='/contacto'>Contacto</Link>
                  <Icon className="carrito" cant={cantTotal} />
                </Nav>
              </Container>
           </Navbar>
        </>
    );
}
