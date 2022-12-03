import React from 'react';
import styled from 'styled-components';

const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Input = styled.input`
  border: 1px #ccc solid;
  width: 910px;
  height: 28px;
  padding: 0 5px;
`

const Button = styled.button`
  width: 240px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-color);

  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
`

const Search = (props: any) => {
  return (
    <SearchWrapper>
        <Input type="text" placeholder={props.placeholder} />
        <Button>Search</Button>
    </SearchWrapper>
  )
}

export default Search;