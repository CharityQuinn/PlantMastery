import React from "react";
import {Navbar, Button} from 'react-bootstrap'
import "./Nav.css";
import {} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Nav = () => (
 
<Navbar  bg="dark" variant="dark">
        <Link to={{pathname:"/"}}><Navbar.Brand>House Plants Advisor</Navbar.Brand></Link>
        <Link to={{pathname:"/"}}><Button >Home</Button></Link>
        <Link to={{pathname:"/flowering"}}><Button >Flowering</Button></Link>
        <Link to={{pathname:"/foliage"}}><Button >Foliage</Button></Link>
        <Link to={{pathname:"/succulents"}}><Button >Succulents</Button></Link>
</Navbar>

)

export default Nav;