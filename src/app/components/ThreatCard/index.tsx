import * as React from 'react'

import styled from "styled-components"

const Container = styled.section`
display: flex;
flex-direction: row;
justify-content: scpace-evenly; 
flex-wrap: wrap;
font-family: 'Montserrat';
background: rgb(0, 17, 71);
border-radius: 6px;
margin: 20px 0;
&:hover {
  .threat__display {
    transition: all 300ms ease-out;
    visibility: visible;
    -webkit-filter: grayscale(0);
  }
}
`;

const MainCard = styled.section`
display: flex;
flex-direction: row;
justify-content: scpace-evenly; 
flex-wrap: wrap;
font-family: 'Montserrat';
background: rgb(0, 17, 71);
border-radius: 6px;
margin: 20px 0;
img {
  width: 60%;
}

.threat__display {
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
  resistance: string;
  weakness: string;
}

export const ThreatCard: React.FC<IThreatCardProps> = ({ name, imgUrl, description, backStory, resistance, weakness }) => {
  return (
    <>
    <Container>
      <MainCard>
        <main className="threat__display">
          <section className="threat__img">
            <h2>{name}</h2>
            <img src={imgUrl} alt="Threat image"/>
          </section>
          <section className="threat__information">
            <p>Description: {description}</p>
            <p>Background Story: {backStory}</p>
            <div className="hero__strwkns">
              <p>Resistance <span>{resistance}</span></p>
              <p>Weakness <span>{weakness}</span></p>
            </div>
          </section>
        </main>
      </MainCard>
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
    </>
  )
}
