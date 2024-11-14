import { Navbar, Container, Nav, NavbarBrand} from "react-bootstrap"


const NavigationBar = () => {     
    return (
        <div>
        <Navbar variant="dark">
            <Container>
                <NavbarBrand href="/">KATSOJA</NavbarBrand>
                <Nav>
                    <Nav.Link href="#Trending">Trending</Nav.Link>
                    <Nav.Link href="#Big3">Big 3</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavigationBar 