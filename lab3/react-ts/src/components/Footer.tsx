import React from 'react';
import styled from 'styled-components';

const Foot = styled.footer`
    padding: 20px 15px 5px;
    background-color: var(--footer-bg-color);
`

const Image = styled.img`
    height: 50px;
`

const Credits = styled.p`
    margin-top: 2px;
    font-size: 14px;
    color: #fff;
`

const FooterLink = styled.a`
    display: block;
    margin-top: 12px;
    font-size: 14px;
    color: #fff; 
`

const Footer = () => {

    const CURRENT_YEAR = new Date().getFullYear();

    return (
        <Foot>
            <Image src="../../public/logo.svg" alt="Footer Logo" />
            <Credits>Data provided by Marvel. © {CURRENT_YEAR} MARVEL</Credits>
            <FooterLink href="https://developer.marvel.com/" target="_blank" title="developer.marvel.com">developer.marvel.com</FooterLink>
        </Foot>
    )
}

export default Footer;