import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap'

export const Mynavbar = () => {
  return (
    <Navbar expand="lg" fixed="top" className="navbar-main py-2">

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto position-relative">
          <LinkContainer to="/">
            <Nav.Link className="mx-3 navbar-main__links">Home</Nav.Link>           
          </LinkContainer>

         
          <LinkContainer to="/info">
            <Nav.Link className="mx-3 navbar-main__links">Info</Nav.Link>           
          </LinkContainer>
          <LinkContainer to="/example">
            <Nav.Link className="mx-3 navbar-main__links">Example</Nav.Link>           
          </LinkContainer>
          <Button className="navbar-main__cstmbtn mx-3 py-2 my-2" variant="primary">Add Data</Button>

        </Nav>

      </Navbar.Collapse>
    </Navbar>
  )
}


export default Mynavbar
