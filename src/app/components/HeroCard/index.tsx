// It is your job to implement this. More info in README

import * as React from 'react'

import styled from "styled-components"

const Container = styled.section`
display: flex;
justify-content: scpace-evenly; 
flex-wrap: wrap;
`;

const DisplayHeroContainer = styled.div`
display: flex;
flex-direction: row;
width: 100%;
h3 {
  font-size: 1.6rem;
  transform: rotateZ(90deg);
  text-align: left;
  width:160px;
  margin-right:-20px;
}
img {
  border-radius: 1px;
  height: 320px;
}
`;
const HeroesContainer = styled.div`
display: flex;
flex-direction: row;
width: calc((90vw/3));
-webkit-filter: grayscale(.9);
&:hover {
  flex-direction: column;
  align-items: center;
  -webkit-filter: grayscale(0);
  h2{
    transform: rotateZ(0deg);
    position: fixed;
    color: rgb(255,255,255);
    text-shadow: rgba(252, 66, 123, .8) 2px 5px;
    z-index:1;
    top: 0;
    transition: all 250ms ease-out;
  }
  img {
    width: 160px;
    -webkit-filter: drop-shadow(2px 8px 6px rgba(0,0,0,0.9));
    border: .25rem solid rgb(252, 66, 123);
    transition: all 200ms; 
  }
}
h2 {
  transition: all 200ms ease-in;
  font-size: 1.6rem;
  transform: rotateZ(90deg);
  text-align: left;
  width:160px;
  margin-right:-20px;
}
img {
  border-radius: 5px;
  height: 160px;
}
`;

interface IHeroCardProps {
  name: string,
  imgAvatarUrl: string;
}

export const HeroCard: React.FC<IHeroCardProps> = ({ name, imgAvatarUrl }) => {
  return (
    <Container>
      <HeroesContainer>
        <h2 className="sc-htoDjs fqwlwq">{name}</h2>
        <img src={imgAvatarUrl} alt="hero avatar image"/>
      </HeroesContainer>
    </Container>
  )
}
