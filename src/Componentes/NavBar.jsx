import React, { useContext } from "react";
import { Container, Nav, NavDropdown, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import Icon from "./CartWidget.jsx";
import hoyts from "../img/hoyts.png"
import { Link } from "react-router-dom";
import { CartContext } from './CartContext'


export default function MyNavBar () {

    let { cantTotal } = useContext (CartContext)
    return (
        <>
            <Navbar expand="lg" bg="black" variant="dark">
            <div className="col-md-1 middle__logo">
              <Link to="/"><img src="/logo.png" alt="Logo" /></Link>
            </div>
            <Container fluid>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="navbar-nav mx-auto">
                <ul className="navbar-nav mx-auto">
                    <Nav.Link><Link className="nombreNav" to="/"><li className="nav-item"><a className="nav-link active">Home</a></li></Link></Nav.Link>
                    <Nav.Link><Link className="nombreNav" to="category/Ficcion"><li className="nav-item"><a className="nav-link active">Ficcion</a></li></Link></Nav.Link>
                    <Nav.Link><Link className="nombreNav" to="category/Drama"><li className="nav-item"><a className="nav-link active">Drama</a></li></Link></Nav.Link>
                    <Nav.Link><Link className="nombreNav" to="category/Terror"><li className="nav-item"><a className="nav-link active">Terror</a></li></Link></Nav.Link>
                    <Nav.Link><Link className="nombreNav" to="category/Aventura"><li className="nav-item"><a className="nav-link active">Aventura</a></li></Link></Nav.Link>
                    <Nav.Link><Link className="nombreNav" to="sedes"><li className="nav-item"><a className="nav-link active">Sedes</a></li></Link></Nav.Link>
                </ul>
                </Nav>
                <Nav>
                <Nav.Link>
                    <Icon className="collapse navbar-collapse" cant={cantTotal}/>
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>

        </>
        
    );
}
