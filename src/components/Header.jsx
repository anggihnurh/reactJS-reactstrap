import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import '../App'
export default class NavbarKu extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div className="App">
                <Navbar color="light" light expand="md">
                    <a href="">
                        <NavbarBrand><img style={{ height: "50px" }} src="http://i63.tinypic.com/oid9xu.png" alt="" /></NavbarBrand>
                    </a>
                    <NavbarBrand href="/">Santren Koding</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Kajian Koding</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Santren Kilat</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Mondok</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Tentang Kami</NavLink>
                            </NavItem>
                            <NavItem>
                                <Button className="btn-outline-primary">Login/SignUp</Button>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}