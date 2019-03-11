import React from "react";
import {Navbar, Button} from 'react-bootstrap'
import "./Nav.css";
import {} from 'react-bootstrap'
import { Link } from 'react-router-dom'

{/* <Link to="/Search Types">Search Types</Link> */}


const Nav = () => (
 
<Navbar  bg="dark" variant="dark">
  <Navbar.Brand as={Link} to="/">House Plants Advisor</Navbar.Brand>
        <Button as={Link} to="/">Home</Button>
        <Button as={Link} to="/search">Search Types</Button>
        <Button as={Link} to="/plants">Plantcare</Button>
        <Button as={Link} to="/Forums">Forums</Button>
</Navbar>

)

export default Nav;