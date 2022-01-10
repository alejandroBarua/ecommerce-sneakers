import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = () => {
	return (
		<NavBarStyled>
			<NavLink to='/collections'>Collections</NavLink>
			<NavLink to='/women'>Women</NavLink>
			<NavLink to='/men'>Men</NavLink>
			<NavLink to='/about'>About</NavLink>
			<NavLink to='/contact'>Contact</NavLink>
		</NavBarStyled>
	)
}

export default NavBar

const NavBarStyled = styled.nav`

	margin-left: 3rem;

	a{
		color: ${({theme}) => theme.secondary};
		margin-right: 2.2rem;
		padding-bottom: 2.3rem;
	}

	a.active{
		border-bottom: solid 3px ${({theme}) => theme.primary};
	}

	a:hover{
		color: ${({theme}) => theme.primary};
	}
`