import * as React from 'react'

import styled, { keyframes } from 'styled-components'

const Container = styled.section`
	background: #1E145D;
	position: relative;
`

const Image = styled.div`
	background-image: url("/public/hero.png");
	min-height: 580px;
	height: 100%;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
	max-width: 1100px;
	margin: 0 auto;
	z-index: 0;
	@media (max-width: 768px) {
		max-height: 500px;
		min-height: 500px;
  }
`

const Logo = styled.img`
	width: 250px;
  position: absolute;
  left: 50%;
  top: 18%;
  margin-left: -125px;
	margin-top: -50px;
	z-index: 1;
`

const rotate = keyframes`
	from {
			-webkit-transform: rotate(0deg);
	}
	to {
			-webkit-transform: rotate(359deg);
	}
`


const AnimLogo = styled.img`
	width: 250px;
	position: absolute;
	left: 50%;
	margin-left: -125px;
	top: 18%;
	margin-top: -50px;
	z-index: 1;
	animation: ${rotate} 1s infinite linear;
`

export const Hero = () => {
  const [count, setCount] = React.useState(0)
  const increment = () => setCount(count + 1)
  return (
    <Container>
      {count >= 5
        ?
        <AnimLogo onClick={increment} src={'/public/summer_hunters_logo.svg'} />
        :
        <Logo onClick={increment} src="/public/summer_hunters_logo.svg" />
      }

      <Image />
    </Container>
  )

}
