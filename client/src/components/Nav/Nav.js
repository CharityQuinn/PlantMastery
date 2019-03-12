import React from "react";
import {Navbar, Button} from 'react-bootstrap'
import "./Nav.css";
import {} from 'react-bootstrap'

const Nav = () => (
 
<Navbar  bg="dark" variant="dark">
  <Navbar.Brand as={Link} to="/">House Plants Advisor</Navbar.Brand>
        <Button as={Link} to="#">Home</Button>
        <Button as={Link} to="#">Plantcare</Button>
        <Button as={Link} to="/search">Search</Button>
        
  </Navbar>

)

export default Nav;