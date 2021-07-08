import React from 'react'
import { Nav, NavContainer, NavLink, NavMenu } from './NavbarElements'

const Navbar = () => {
    return (
        <>
        <NavContainer>
            <Nav>
                <NavLink to='/'>
                    <img src='https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt62186dab5d281404/5f57a8b338c0eb4e910ab301/logo_new_webp.webp' width='280'/>
                </NavLink>
                <NavMenu>
                    <NavLink to='/play' >
                        Cómo jugar
                    </NavLink>
                    <NavLink to='/heroes' >
                        Héroes
                    </NavLink>
                    <NavLink to='/cards' >
                        Cartas
                    </NavLink>
                </NavMenu>
            </Nav>
        </NavContainer>
        </>
    )
}

export default Navbar;
