import React from "react";
import {Navbar, Button} from 'react-bootstrap'
import "./Nav.css";
import {} from 'react-bootstrap'
import { Link } from 'react-router-dom'
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.0/css/all.css" integrity="sha384-Mmxa0mLqhmOeaE8vgOSbKacftZcsNYDjQzuCOm6D02luYSzBG8vpaOykv9lFQ51Y" crossorigin="anonymous"></link>

const Nav = () => (
 
<Navbar  bg="dark" variant="dark">
        <Link to={{pathname:"/"}}><Navbar.Brand>House Plants Advisor</Navbar.Brand></Link>
        <Link to={{pathname:"/likedPlant"}}><Button >Heart</Button></Link>
        <Link to={{pathname:"/"}}><Button >Home</Button></Link>
        <Link to={{pathname:"/flowers"}}><Button >Flowering</Button></Link>
        <Link to={{pathname:"/foliage"}}><Button >Foliage</Button></Link>
        <Link to={{pathname:"/succulents"}}><Button >Succulents</Button></Link>
</Navbar>

)

export default Nav;