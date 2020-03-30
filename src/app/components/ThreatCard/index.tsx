import * as React from 'react'

import styled from "styled-components"

const Container = styled.section`
display: flex;
flex-direction: row;
justify-content: scpace-evenly; 
flex-wrap: wrap;
font-family: 'Montserrat';
background: rgb(18, 23, 48);
border-radius: 6px;
margin: 20px 0;
`;

const InnerContainer = styled.div`
display: flex;
flex-direction: row;
.threat__display {
  display: flex;
  flex-direction: row;
  width: calc((90vw/3));
  h2 {
    transform: rotateZ(90deg);
    color: rgba(255, 33, 60, .6);
    font-weight: 600;
    text-align: left;
    width:160px;
    margin-right:-20px;
    text-transform: uppercase;
  }
  img {
    height: 160px;
  }
}
.threat__information {
  margin: 0 20px;
  p {
    font-weight: 500;
    letter-spacing: 0.65px;
    line-height: 24px;
    font-size: .8rem;
    color:white;
    text-align: justify;
  }
}
`;

interface IThreatCardProps {
  name: string,
  imgUrl: string;
  description: string;
  backStory: string;
}

export const ThreatCard: React.FC<IThreatCardProps> = ({ name, imgUrl, description, backStory}) => {
  return (
    <Container>
      <InnerContainer>
        <div className="threat__display">
          <h2>{name}</h2>
          <img src={imgUrl} alt="Threat image"/>
        </div>
        <div className="threat__information">
          <p>Description: {description}</p>
          <p>Background Story: {backStory}</p>
        </div>
      </InnerContainer>
    </Container>
  )
}
