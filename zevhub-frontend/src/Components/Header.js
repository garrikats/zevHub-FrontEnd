import React from 'react';
import { useState } from 'react';
import {
  Nav,
  Navbar,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Modal,
  SplitButton,
  ButtonGroup,
} from 'react-bootstrap';
import { Cart2 } from 'react-bootstrap-icons';

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [currentUser, setCurrentUser] = useState('User');

  const handleClose = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  return (
    <div>
      <Navbar bg='light' expand='lg'>
        <Container fluid>
          <Navbar.Brand href='#'>Z E V H U B</Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='#action2'>Sell</Nav.Link>

              <NavDropdown title='Buy' id='navbarScrollingDropdown'>
                <NavDropdown.Item href='#action3'>Cars</NavDropdown.Item>
                <NavDropdown.Item href='#action4'>Bikes</NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item href='#action5'>Scooters</NavDropdown.Item>
                <NavDropdown.Item href='#action6'>Skateboards</NavDropdown.Item>
                <NavDropdown.Item href='#action7'>Accessories</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className='d-flex'>
              <FormControl
                type='search'
                placeholder='Search'
                className='me-2'
                aria-label='Search'
              />
              <Button variant='outline-success'>Search</Button>
            </Form>
            {[SplitButton].map((DropdownType, idx) => (
              <DropdownType
                as={ButtonGroup}
                key={idx}
                id={`dropdown-button-drop-${idx}`}
                // size='sm'
                variant='outline-success'
                title={currentUser}
              >
                {/* <NavDropdown.Item href='#action3' onClick={handleShow}>
                Login
              </NavDropdown.Item> */}
                <NavDropdown.Item href='#action3' onClick={handleShowLogin}>
                  Login
                </NavDropdown.Item>
                <NavDropdown.Item href='#action4' onClick={handleShowRegister}>
                  Register
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action5'>
                  Something else here
                </NavDropdown.Item>
                {/* <Dropdown.Item eventKey='1'>Action</Dropdown.Item>
                <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
                <Dropdown.Item eventKey='3'>Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey='4'>Separated link</Dropdown.Item> */}
              </DropdownType>
            ))}
            {/* <NavDropdown
              title='Hi, ${currentUser}!'
              id='navbarScrollingDropdown'
            >
              <NavDropdown.Item href='#action3' onClick={handleShow}>
                Login
              </NavDropdown.Item>
              <NavDropdown.Item href='#action4' onClick={handleShowRegister}>
                Register
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action5'>
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            <Button variant='outline-success'>
              <Cart2 />
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* login modal */}
      <Modal show={showLogin} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Register modal */}
      <Modal show={showLogin} onHide={handleCloseRegister}>
        <Modal.Header closeButton>
          <Modal.Title>Please Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCloseRegister}>
            Close
          </Button>
          <Button variant='primary' onClick={handleCloseRegister}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Header;
