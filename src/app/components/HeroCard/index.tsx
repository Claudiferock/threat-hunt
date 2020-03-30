import * as React from 'react'

import styled from "styled-components"

const Container = styled.section`
display: flex;
justify-content: scpace-evenly; 
flex-wrap: wrap;
`;

const HeroesContainer = styled.div`
display: flex;
flex-direction: column;
&:hover {
  .hero__display {
    transition: all 300ms ease-out;
    visibility: visible;
    -webkit-filter: grayscale(0);
  }
}
.heroes {
  display:flex;
  flex-direction: row;
  margin-top: 50vh;
  width: calc((90vw/3));
  &:hover {
    flex-direction: column;
    align-items: center;
    -webkit-filter: grayscale(0);
    h2{
      transform: rotateZ(0deg);
      position: fixed;
      color: rgb(255,255,255);
      text-shadow: rgba(252, 66, 123, .7) 2px 5px;
      z-index:1;
      top: 0;
      transition: all 250ms ease-out;
    }
    img {
      width: 160px;
      -webkit-filter: drop-shadow(2px 8px 6px rgba(0,0,0,0.9));
      border: .2rem solid rgb(252, 66, 123);
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
    border-radius: 20px;
    height: 160px;
    -webkit-filter: grayscale(.9);
  }
}
.hero__display {
  transition: all 300ms ease-in;
  display:flex;
  flex-direction: row;
  align-items: center;
  height: 44vh;
  padding: 8px;
  margin: 0 4vw;
  position: absolute;
  left: 0;
  visibility: hidden;
  -webkit-filter: grayscale(1);
  background-color: rgb(18, 23, 48);
  border-radius: 10px;
  img {
    border-radius: 3px;
    height: 40vh;
  }
}
.hero__information {

  font-family: 'Montserrat';
  padding: 0 20px;
  color:white;

  h2 {
    font-weight: 800;
    font-size: 1rem;
    line-height: 25px;
    letter-spacing: 1.15px;
    color: rgb(252, 66, 123);
  }
  p {
    font-weight: 500;
    letter-spacing: 0.65px;
    line-height: 24px;
    font-size: .8rem;
    color:white;
    text-align: justify;
  }
}
.hero__strwkns {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  p {
    color: rgb(252, 66, 123);
    font-size: 1rem;
    span {
      text-transform: uppercase;
    }
  }
}
`;

interface IHeroCardProps {
  name: string,
  imgUrl: string;
  imgAvatarUrl: string;
  description: string;
  backStory: string;
  resistance: string;
  weakness: string;
}

export const HeroCard: React.FC<IHeroCardProps> = ({ name, imgUrl, imgAvatarUrl, description, backStory, resistance, weakness }) => {
  return (
    <Container>
      <HeroesContainer>
        <div className="hero__display">
          <img src={imgUrl} alt="hero's image"/>
          <div className="hero__information">
            <h2>{name}</h2>
            <p className="hero__description">{description}</p>
            <p>{backStory}</p>
            <div className="hero__strwkns">
              <p>Resistance <span>{resistance}</span></p>
              <p>Weakness <span>{weakness}</span></p>
            </div>
          </div>

        </div>
        <div className="heroes">
          <h2 className="sc-htoDjs fqwlwq">{name}</h2>
          <img src={imgAvatarUrl} alt="hero avatar image"/>
        </div>

      </HeroesContainer>
    </Container>
  )
}
