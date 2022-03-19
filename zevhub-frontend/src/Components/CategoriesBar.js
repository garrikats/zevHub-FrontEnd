import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const CategoriesBar = () => {
  return (
    <div>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand href='#home'>
            The Electric Mobility Marketplace
          </Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='#cars'>Cars</Nav.Link>
            <Nav.Link href='#bikes'>Bikes</Nav.Link>
            <Nav.Link href='#scooters'>Scooters</Nav.Link>
            <Nav.Link href='#skateboards'>Skateboards</Nav.Link>
            <Nav.Link href='#accessories'>Accessories</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <br />
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar> */}

      {/* <br />
  <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar> */}
    </div>
  );
};

export default CategoriesBar;