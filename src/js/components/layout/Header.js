import React from "react"

import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from "react-bootstrap"
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'


export default class Header extends React.Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/" id="nav-logo"><img src="img/logo.png" /></a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <IndexLinkContainer to="/" class="nav-link">
                        <NavItem class="nav-link">Home</NavItem>
                        </IndexLinkContainer>
                        <LinkContainer to="about">
                        <NavItem class="nav-link">About</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}