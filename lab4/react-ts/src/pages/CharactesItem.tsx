import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { characters } from '../data/characters';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  width: 1200px;
  min-height: 85vh;
  margin: 0 auto;
  padding: 15px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 600px;
  margin-top: 60px;
`

const WrapperItem = styled.div`
  max-width: 50%;
`

const Image = styled.img`
  max-width: 100%;
`

const Title = styled.h1``

const Description = styled.p``

const SubTitle = styled.h2``

const Nav = styled.nav`
  margin-top: 20px;
`

const Link = styled.a`
  display: block;
  line-height: 170%;
  color: #0000ff;
`

const CharactesItem = () => {
  const {id} = useParams()
  const info = characters[Number(id) - 1];
  return (
    <>
      <Header/>
        <Container>
          <Wrapper>
            <WrapperItem>
              <Image src={info.image} alt="character image" />
            </WrapperItem>
            <WrapperItem>
              <Title>{info.title}</Title>
              <Description>{info.description}</Description>
            </WrapperItem>
          </Wrapper>
          <Wrapper>
            <WrapperItem>
              <SubTitle>Comics</SubTitle>
              <Nav>
                <NavLink to='/comics/2'><Link>The Vitals: True EMS Stories #0</Link></NavLink>
                <NavLink to='/comics/4'><Link>Spider-Man/Venom #1</Link></NavLink>
                <NavLink to='/comics/6'><Link>Thor: God of Thunder #1</Link></NavLink>
              </Nav>
            </WrapperItem>
            <WrapperItem>
              <SubTitle>Series</SubTitle>
              <Nav>
                <NavLink to="/series/2"><Link>Aberration</Link></NavLink>
                <NavLink to="/series/4"><Link>Aberration</Link></NavLink>
                <NavLink to="/series/6"><Link>Aberration</Link></NavLink>
              </Nav>
            </WrapperItem>
          </Wrapper>
        </Container>
      <Footer/>
    </>
  )
}

export default CharactesItem;