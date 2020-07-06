import styled from 'styled-components';

export const Wrapper = styled.main`
	background-color: #06092b;
	color: #fff;
	width: 100%;
	height: 100%;
	padding: 3rem;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Logo = styled.img`
	position: relative;
	width: 25rem;
	margin-bottom: 2rem;
`;

export const Title = styled.h1`
	position: relative;
	font-size: 2.5rem;
`;

export const Description = styled.h2`
	position: relative;
	font-size: 2rem;
	font-weight: 400;
`;

export const Illustration = styled.img`
	position: relative;
	width: min(30rem, 100%);
	margin-top: 3rem;
`;
