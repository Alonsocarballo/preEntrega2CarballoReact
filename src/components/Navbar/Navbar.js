// import CartWidget from "../CartWidget/CartWidget"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../CartWidget/assets/favicon-16x16.png';
import { Button } from 'react-bootstrap';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
      <Container>
        <Navbar.Brand href="#home" >Cel Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"><Button>Celulares</Button></Nav.Link>
            <Nav.Link href="#features"><Button>Tablets</Button></Nav.Link>
            <Nav.Link href="#features"><Button>Notebooks</Button></Nav.Link>
            
              </Nav>
          <Nav>
            
            <Nav.Link href="#deets"><Button>Mas Accesorios</Button></Nav.Link>
            <Nav.Link eventKey={2} href="#memes"> <Button>Contacto</Button>
            
            </Nav.Link>
          </Nav>
            <div className="logo">
                 <a href='value'> 
                     <img src={logo} alt="Logo de la aplicación"  /> 
                 </a>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;

// import { Button } from 'react-bootstrap';



// const NavBar = () => { 
//     return (
//         <nav>
//             <h3> ECOMMERCE</h3>
//             <diV class="nav">

//                 <Button variant="primary">Celulares</Button> 
//                 <Button variant="primary">Tablets</Button> 
//                 <Button variant="primary">Notebooks</Button> 
                
                         

//             </diV>
//             <CartWidget/>
//         </nav>
//     )
// }

// export default NavBar