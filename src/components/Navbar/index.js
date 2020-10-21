import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Sukkwon On</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/services" activeStyle>
                        Services
                    </NavLink>
                    <NavLink to="/contact-us" activeStyle>
                        Contact Us
                    </NavLink>
                    <NavLink to="/sign-up" activeStyle>
                        Sign Up
                    </NavLink>
                    <NavBtn>
                        <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
                    </NavBtn>
                </NavMenu>
                {/* <NavBtn>
                    <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
                </NavBtn> */}
            </Nav>
        </>
    )
}

export default Navbar

