import React from "react";
import {Navbar, Button} from 'react-bootstrap'
import "./Nav.css";
import {} from 'react-bootstrap'
import { Link } from 'react-router-dom'

{/* <Link to="/Search Types">Search Types</Link> */}


const Nav = () => (
 
<Navbar  bg="dark" variant="dark">
<<<<<<< HEAD
  <Navbar.Brand as={Link} to="/">House Plants Advisor</Navbar.Brand>
        <Button as={Link} to="/">Home</Button>
        <Button as={Link} to="/search">Search Types</Button>
        <Button as={Link} to="/plants">Plantcare</Button>
        <Button as={Link} to="/Forums">Forums</Button>
</Navbar>
=======
  <Navbar.Brand href="/">House Plants Advisor</Navbar.Brand>
        <Button href="#">Home</Button>
        <Button href="#">Plantcare</Button>
        <div className="input-group">
          <div className="input-group-prepend">
            <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"      aria-haspopup="true" aria-expanded="false">Search Types</button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="../../containers/flowering.js">Flowers</a>
              <a className="dropdown-item" href="../../containers/foliage.js">Foliage</a>
              <a className="dropdown-item" href="../../containers/succulents.js">Succulents</a>
            </div>
          </div>
            <input type="text" className="form-control" aria-label="Text input with dropdown button"/>
        </div>
  </Navbar>
>>>>>>> master

)

export default Nav;