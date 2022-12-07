import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Header from '../components/Header';
import Search from '../components/Search';
import Character from '../components/Character';
import Footer from '../components/Footer';
// import { characters } from '../data/characters';
// import { ICharacter } from '../models';

import { getApiresourse } from '../utils/network';

const Container = styled.div`
  width: 1200px;
  min-height: 80vh; 
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

const CharactersPage = () => {
  // const [url, setUrl] = useState("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=eaa401e923f84e22e53bd745f7ee71a3&hash=4efc4f2691084f932387b6e7680f2333");
  // const [item, setItem] = useState();

  // useEffect(() => {
  //   const fetch = async() => {
  //     const res = await axios.get(url);
  //     setItem(res.data.data.results);
  //   }
  //   fetch();
  // }, [url])

  // async function fetchProducts() {
  //   const response = await axios.get("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=eaa401e923f84e22e53bd745f7ee71a3&hash=4efc4f2691084f932387b6e7680f2333");
  //   console.log(response.data.data);    
  // }

  // useEffect(() => {
  //   fetchProducts()
  // }, [])

  const [characters, setCharacters] = useState<[]>([]);

  const getResourse = async () => {
    const response = await axios.get("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=eaa401e923f84e22e53bd745f7ee71a3&hash=4efc4f2691084f932387b6e7680f2333");
    // console.log(response.data.data.results);
    const charactersList = response.data.data.results.map((index: any) => {
      console.log(index.name);
           
      return {
        name: index.name,
      }
    }) 

    setCharacters(charactersList);
  }

  useEffect(() => {
     getResourse();
  }, [])
  
  return (
    <>
        <Header/>
        <Container>
          <>
            <Wrapper>
              <Title>Characters</Title>
              <Count>(1562)</Count>
            </Wrapper>
            <Search placeholder="Search for Characters by Name"/>
            <Hr/>
            <Grid>
              {/* {characters.map(character => 
                <Character character={character} key={character.id} />
              )} */}
            </Grid>
            {characters && characters.map((name: any) => {
              <h1>{name}</h1>
            })}
          </>
        </Container>
        <Footer/>
    </>
  )
}

export default CharactersPage;