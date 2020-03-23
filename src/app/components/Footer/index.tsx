import * as React from 'react'

import styled, { keyframes } from 'styled-components'
import { HeadingThree } from '../../components/Typography';

const Img = styled.img`
	margin: 0 auto;
	width: 250px;
`

const ContactInfo = styled.div`
	flex: 1 0 33%;
	@media (max-width: 768px) {
		margin-top: 30px;
		text-align: center;
	}
	
`

const EmptyContainer = styled.div`
	flex: 1 0 33%;
`

const LeftSection = styled.div`
	color: #fff;
	font-family: "Montserrat";
	font-weight: 500;
	margin-top: 80px;
	@media (max-width: 768px) {
		margin-top: 50px;
	}
`

const LogoContainer = styled.div`
	color: #fff;
	font-family: "Montserrat";
	font-weight: 500;
	display: flex;
`

const StyledFooter = styled.footer`
	background: #001147;
	min-height: 500px;
	> img {
		padding-top: 100px;
	}
	left: 0;
	bottom: 0;
	width: 100%;
`

const Name = styled.div`
	font-family: "Montserrat";
	font-weight: 600;
	font-size: 16px;
	color: #fff;
	margin-top: 30px;
	margin-bottom: 5px;
	letter-spacing: 1.25px;
`

const Info = styled.div`
	font-family: "Montserrat";
	font-weight: 400;
	font-size: 14px;
	color: #fff;
	opacity: 0.7;
	margin-top: 7px;
	margin-bottom: 7px;
	line-height: 20px;
	letter-spacing: 1.25px;
`

const Container = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	justify-content: space-between;
	max-width: 1200px;
	margin: 0 auto;
	padding: 50px;
	@media (max-width: 768px) {
		flex-direction: column-reverse;
		align-items: center;
		justify-content: space-around;
	}
`

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Container>
        <ContactInfo>
        </ContactInfo>
        <LogoContainer>
          <Img src={'/public/summer_hunters_logo.svg'} />
        </LogoContainer>
        <EmptyContainer />
      </Container>
    </StyledFooter>
  )
}
