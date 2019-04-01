import React from "react";
import {Navbar, Button} from 'react-bootstrap'
import "./Nav.css";
import {} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Nav = () => (
 
<Navbar  bg="dark" variant="dark" className="justify-content-end">
  <div className="title-liked" style={{margin: "0 auto 0 0"}}>
        <Link to={{pathname:"/"}}><Navbar.Brand>House Plants Advisor</Navbar.Brand></Link>
        <Link to={{pathname:"/likedPlant"}}><span><i className="fas fa-heart" style={{ color: "white", margin: "0 0 0 2rem"}}></i></span></Link>
</div>
        <Link to={{pathname:"/flowers"}}><Button style={{marginRight: "2rem"}} >Flowering</Button></Link>
        <Link to={{pathname:"/foliage"}}><Button style={{marginRight: "2rem"}} >Foliage</Button></Link>
        <Link to={{pathname:"/succulents"}}><Button >Succulents</Button></Link>
</Navbar>

)

export default Nav;