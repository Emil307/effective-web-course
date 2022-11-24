import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Search from '../components/Search';
import Character from '../components/Character';
import Footer from '../components/Footer';
import { series } from '../data/series';

const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
    padding: 15px;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const Title = styled.h1`
  font-weight: 700;
  font-size: 30px;
  color: var(--title-text-color);
  margin-bottom: 20px;
`

const Count = styled.span`
  margin-left: 5px;
  color: var(--light-text-color);
`

const Hr = styled.hr`
  margin: 20px 0;
  width: 100%;
  border: 1px #ccc solid;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 15px;
`

const SeriesPage = () => {
    return (
        <>
          <Header/>
          <Container>
            <Wrapper>
              <Title>Series</Title>
              <Count>(1562)</Count>
            </Wrapper>
            <Search placeholder="Search for Series by Name"/>
            <Hr/>
            <Grid>
              {series.map(character => 
                <Character character={character} key={character.id} />
              )}
            </Grid>
          </Container>
          <Footer/>
        </>
      )
}

export default SeriesPage;