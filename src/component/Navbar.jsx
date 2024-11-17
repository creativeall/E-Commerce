import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './NavScrollExample.css';
import { useTypewriter } from 'react-simple-typewriter';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { Button } from 'react-bootstrap';
 

function NavScrollExample() {
    const [typeEffect] = useTypewriter({
        words: ['Effortlessly blend comfort & style!'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40,
    });

    return (
        <header>
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
                                <NavDropdown.Item href="#work-office">Work & Office</NavDropdown.Item>
                                <NavDropdown.Item href="#activewear">Activewear</NavDropdown.Item>
                                <NavDropdown.Item href="#evening-dresses">Evening Dresses</NavDropdown.Item>
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
                            <Dropdown align="end" style={{margin:"5px", color:"white", border:"none"}}>
                                <Dropdown.Toggle id="dropdown-basic" className="account-icon">
                                    <SupervisorAccountIcon 
                                         
                                    />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <form className='page'>
                                        <label for="fname">First name:</label>
                                        <input type="text" id="fname" name="fname" /><br /><br />
                                        <label for="lname">Last name:</label>
                                        <input type="text" id="lname" name="lname" /><br /><br />
                                        <label for="pwd">Password:</label><br />
                                        <input type="password" id="pwd" name="pwd" />
                                       <Button style={{color:"black", margin:"5px"}}>SignIn</Button>
                                       <Button style={{color:"black"}}>SignOut</Button>
                                    </form>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <section className="h-txt">
                <span>Casual & Everyday</span>
                <h1>{typeEffect}</h1>
                <p>
                    Effortlessly blend comfort and style with our Casual & Everyday collection, featuring cozy sweaters, versatile denim, laid-back tees, and relaxed-fit joggers for your everyday adventures.
                </p>
                <button className="btn">Shop</button>
            </section>
        </header>
    );
}

export default NavScrollExample;
