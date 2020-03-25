import * as React from 'react'

import styled from "styled-components"

const Container = styled.section`
display: flex;
justify-content: scpace-evenly; 
flex-wrap: wrap;
`;

const InnerContainer = styled.div`
display: flex;
flex-direction: row;
width: calc((90vw/3));
background: rgba(0,0,0,.1);
h2 {
  font-size: 1.6rem;
  transform: rotateZ(90deg);
  background: rgba(0,255,255,.1);
  text-align: left;
  width:160px;
  margin-right:-20px;
}
img {
  height: 160px;
}
`;

interface IThreatCardProps {
  name: string,
  imgUrl: string;
  // extend this
}

export const ThreatCard: React.FC<IThreatCardProps> = ({ name, imgUrl }) => {
  return (
    <Container>
      <InnerContainer>
        <h2 className="sc-htoDjs fqwlwq">{name}</h2>
        <img src={imgUrl} alt="Threat image"/>
      </InnerContainer>
    </Container>
  )
}
