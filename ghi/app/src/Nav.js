import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navigation() {
  return (

    <Navbar collapseOnSelect expand="lg" className="bg-success">
      <Container>
        <Navbar.Brand href="/">CarCar</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Manufacturers" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/manufacturers/">
                List
              </NavDropdown.Item>
              <NavDropdown.Item href="/manufacturers/new">
                Add
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Vehicle Models" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/models">
                List
              </NavDropdown.Item>
              <NavDropdown.Item href="/models/new">
                Add
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Automobiles" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/automobiles/">
                List
              </NavDropdown.Item>
              <NavDropdown.Item href="/automobiles/new">
                Add
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Service Appointments" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/appointments">
                List
              </NavDropdown.Item>
              <NavDropdown.Item href="/appointments/new">
                New
              </NavDropdown.Item>
              <NavDropdown.Item href="/appointments/history">
                History
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Sales Records" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/sales-record/all">
                List
              </NavDropdown.Item>
              <NavDropdown.Item href="/sales-record/new">
                New
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Sales Person" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/sales-person/new">
                New
              </NavDropdown.Item>
              <NavDropdown.Item href="/sales-person/sales">
                History
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/technician/new">New Technician</Nav.Link>
            <Nav.Link href="/customer/new">New Customer</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation;
