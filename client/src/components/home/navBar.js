import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/img/logo.png";
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">
            <img className="logo-img" src={logo} alt="logo" />   
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className={"nav-link"} to="/">Home</NavLink>
            <NavLink className={"nav-link"} to="/category">Category</NavLink>
            <NavLink className={"nav-link"} to="/products">Products</NavLink>
          </Nav>
          <Nav>
          <NavLink className={"nav-link"} to="cart">Cart (0) </NavLink>
          <NavLink className={"nav-link"} to="/login">Login</NavLink>
          <NavLink className={"nav-link"} to="/register">Register</NavLink>
          </Nav>
        </Container> 
      </Navbar>
    </div>
  )
}

export default NavBar;