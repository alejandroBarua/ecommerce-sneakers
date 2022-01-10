import React from 'react';
import styled from 'styled-components';
import { Container, Flex } from '../styles';

import NavBar from './NavBar';

import logo from '../assets/images/logo.svg';
import userImg from '../assets/images/image-avatar.png';
import cartIcon from '../assets/images/icon-cart.svg';


const Header = () => {
	return (
		<header>
			<Container>
				<FlexStyled>
					<NavLeft>
						<img src={logo} alt="logo" />
						<NavBar />
					</NavLeft>
					<NavRight>
						<img src={cartIcon} alt="cart" />
						<UserImg src={userImg} alt="user" />
					</NavRight>
				</FlexStyled>
			</Container>
		</header>
	)
}

export default Header


const FlexStyled = styled(Flex)`

	border-bottom: solid 2px hsl(223, 64%, 96%);
	height: 6rem;
	justify-content: space-between;
`

const NavLeft = styled(Flex)`

	
`

const NavRight = styled(Flex)`

	img:hover{
		cursor: pointer;
	}
		
`

const UserImg = styled.img`

	margin-left: 2rem;
	width: 40px;
	
	&:hover{
		border-radius: 50%;
		outline: solid 2px ${({theme}) => theme.primary};
	}
`