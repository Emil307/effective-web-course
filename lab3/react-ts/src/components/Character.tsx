import React from 'react';
import styled from 'styled-components';
import { ICharacter } from '../models';

interface CharacterProps {
    character: ICharacter
}

const Card = styled.div`
    min-width: 170px;
    height: 340px;
    border: 1px solid #ccc;
`

const Image = styled.img`
    width: 100%;
    height: 230px;
`

const Offer = styled.div`
    padding: 5px;
`

const Title = styled.h1`
    font-size: 18px;
    font-weight: 500;
    color: var(--character-title-color); 
`

const Description = styled.p`
    margin-top: 5px;
    font-size: 14px;
    font-weight: 300;
    color: var(--light-text-color); 
`

const Character = (props: CharacterProps) => {
    return (
        <Card>
            <Image src={props.character.image} alt="Character Image" />
            <Offer>
                <Title>{props.character.title}</Title>
                <Description>{props.character.description}</Description>
            </Offer>
        </Card>
    )
}

export default Character;