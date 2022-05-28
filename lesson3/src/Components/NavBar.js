import React from 'react';
import styled from 'styled-components';
import logoImg from '../image/logo.svg'
import ButtonUser from '../image/user.svg'

//созданим component
const NavBarStyled = styled.header`
	position:fixed;
	top:0;
	left:0;
	z-index: 999;
	height: 80px;
	width: 100vw;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px;
	background-color: #299B01;
	color: white;
`;
const Logo = styled.div`
	display: flex;
	align-items: center;
`;
const H1 = styled.h1`
	font-size: 24px;
	margin-left:15px;
`;
const ImgLogo = styled.img`
	width: 50px;
`;
const ButtonStyle = styled.button`
	color: #fff;
	font-size: 16px;
	background-color: transparent;
	border: none;
	cursor: pointer;
`;
const UserButton = styled.img`
	display: block;
	width: 32px;
	margin: 0 auto 5px;
`;

export const NavBar = () => (
	<NavBarStyled>
		<Logo>
			<ImgLogo src = {logoImg} alt ="logo"/>
			<H1>Restaurant</H1>
		</Logo>
		<ButtonStyle>
		<UserButton src = {ButtonUser} alt ="user"/>
			Войти
			</ButtonStyle>
		</NavBarStyled>
);