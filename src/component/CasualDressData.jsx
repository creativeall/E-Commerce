import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./NavScrollExample.css";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { Button } from "react-bootstrap";
import CasualDress from "./CasualDress";
import Footer from './Footer';
import casual1 from "../images/casual1.jpg";
import casual2 from "../images/casual2.jpg";
import casual3 from "../images/casual3.jpg";
import casual4 from "../images/casual4.png";
import casual5 from "../images/casual5.jpg";
import casual6 from "../images/casual6.jpg";  
import casual7 from "../images/casual7.jpg";
import casual8 from "../images/casual8.jpg";
import casual9 from "../images/casual9.jpg";
import casual10 from "../images/casual10.jpg";
import './cards.css'
 

const CasualDressData = () => {
  return (
    <>
    <Navbar expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand>E-Commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#shop">Shop</Nav.Link>
              <NavDropdown title="Categories" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#casual">Casual</NavDropdown.Item>
                <NavDropdown.Item href="#work-office">
                  Work & Office
                </NavDropdown.Item>
                <NavDropdown.Item href="#activewear">
                  Activewear
                </NavDropdown.Item>
                <NavDropdown.Item href="#evening-dresses">
                  Evening Dresses
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Form className="d-flex align-items-center">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <ShoppingCartIcon className="cart-icon" />
              <Dropdown
                align="end"
                style={{ margin: "5px", color: "white", border: "none" }}
              >
                <Dropdown.Toggle id="dropdown-basic" className="account-icon">
                  <SupervisorAccountIcon />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <form className="page">
                    <label for="fname">First name:</label>
                    <input type="text" id="fname" name="fname" />
                    <br />
                    <br />
                    <label for="lname">Last name:</label>
                    <input type="text" id="lname" name="lname" />
                    <br />
                    <br />
                    <label for="pwd">Password:</label>
                    <br />
                    <input type="password" id="pwd" name="pwd" />
                    <Button style={{ color: "black", margin: "5px" }}>
                      SignIn
                    </Button>
                    <Button style={{ color: "black" }}>SignOut</Button>
                  </form>
                </Dropdown.Menu>
              </Dropdown>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h1 style={{ textAlign: "center", }}>Casual Dresses</h1>
      <div className="cards-container">
        <CasualDress 
            imgsrc={casual1}
            title="BASKLE Midi Dress With Belt - Customize"
            text="₹6666.00 MRP"
        />
        <CasualDress 
            imgsrc={casual2}
            title="BASKLE Midi Dress With Belt - Customize"
            text="₹6666.00 MRP"
        />
        <CasualDress 
            imgsrc={casual3}
            title="BASKLE Midi Dress With Belt - Customize"
            text="₹6666.00 MRP"
        />
        <CasualDress 
            imgsrc={casual4}
            title="BASKLE Midi Dress With Belt - Customize"
            text="₹6666.00 MRP"
        />
        <CasualDress 
            imgsrc={casual5}
            title="BASKLE Midi Dress With Belt - Customize"
            text="₹6666.00 MRP"
        />
        <CasualDress 
            imgsrc={casual6}
            title="BASKLE Midi Dress With Belt - Customize"
            text="₹6666.00 MRP"
        />
        <CasualDress 
            imgsrc={casual7}
            title="BASKLE Midi Dress With Belt - Customize"
            text="₹6666.00 MRP"
        />
        <CasualDress 
            imgsrc={casual8}
            title="BASKLE Midi Dress With Belt - Customize"
            text="₹6666.00 MRP"
        />
        <CasualDress 
            imgsrc={casual9}
            title="BASKLE Midi Dress With Belt - Customize"
            text="₹6666.00 MRP"
        />
        <CasualDress 
            imgsrc={casual10}
            title="BASKLE Midi Dress With Belt - Customize"
            text="₹6666.00 MRP"
        />
      </div>
      <Footer />
    </>
  );
};

export default CasualDressData;
