import * as React from 'react'

import styled from 'styled-components'

const Container = styled.header<Partial<ITopBar>>`
	background: #001147;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	> button {
		margin-right: 30px;
	}

	@media (max-width: 768px) {
		height: 80px
	}

`

const Logo = styled.img`
	height: 65%;
	margin-left: 30px;
	@media (max-width: 768px) {
		height: 50%;
	}
`

const Back = styled.img`
	padding-left: 40px;
	position: relative;
	:active {
		top: 1px;
	}
`

interface ITopBar {
}

export const TopBar: React.FC<ITopBar> = () => (
  <Container>
    <Logo src={'/public/hoxhunt_logo.svg'} />
  </Container >
)
