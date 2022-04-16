import React from "react";
import {
  Dropdown,
  Row,
  Col,
  DropdownButton,
  Container,
} from "react-bootstrap";
import { FaRegUserCircle } from "react-icons/fa";
import { GiExitDoor } from "react-icons/gi";

import { useAutenticationManager } from "../../hooks/useAutenticationManager";

const AppNav = () => {

  let autenticacion = useAutenticationManager();
  return (
    <nav className="main-header navbar navbar-expand navbar-light navbar-light shadow">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <i className="fas fa-bars" />
          </a>
        </li>

        {/* <li className="nav-item d-none d-sm-inline-block">
          <a href="index3.html" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="#" className="nav-link">
            Contact
          </a>
        </li> */}
      </ul>
      <Container>
        <Row></Row>
        <Row>
          <Col md="auto">
            <h4>Sistema OTLNH</h4>
          </Col>
        </Row>
        <Row></Row>
      </Container>
      <DropdownButton
        align="end"
        variant="dark"
        title={<FaRegUserCircle style={{ fontSize: 27 }} />}
        id="dropdown-menu-align-end"
      >
        <Dropdown.Item eventKey="1" disabled>
          Usuario Admin
        </Dropdown.Item>
        {/* <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item> */}
        <Dropdown.Divider />
        <Dropdown.Item onClick={() => autenticacion.closeSession()} eventKey="4">
          <GiExitDoor style={{ fontSize: 20 }} /> Cerrar Sesión
        </Dropdown.Item>
      </DropdownButton>
    </nav>
  );
};

export default AppNav;
