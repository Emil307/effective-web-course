import React from 'react';
import styled from 'styled-components'; 
import { NavLink } from 'react-router-dom';

const Head = styled.header`
    padding: 15px;
    background-color: var(--header-bg-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Image = styled.img`
    height: 30px;
`

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 240px;
`

const Link = styled.a`
    font-size: 18px;
    color: var(--primary-color);
    cursor: pointer;    
`

const Header = () => {
  return (
    <Head>
        <Image src="../../public/logo.svg" alt="Header Logo" />
        <Nav>
            <NavLink to="/"><Link>Characters</Link></NavLink>
            <NavLink to="/comics"><Link>Comics</Link></NavLink>
            <NavLink to="/series"><Link>Series</Link></NavLink>
        </Nav>
    </Head>
  )
}

export default Header;