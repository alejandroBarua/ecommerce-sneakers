import React from 'react';
import styled from 'styled-components';
import { Container, Flex } from '../styles';

import img1Product from '../assets/images/image-product-1.jpg';
import img2Product from '../assets/images/image-product-2.jpg';
import img3Product from '../assets/images/image-product-3.jpg';
import img4Product from '../assets/images/image-product-4.jpg';

import cartIcon from '../assets/images/icon-cart-light.png';

const product = {
	name: "Fall Limited Edition Sneakers",
	description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
	price: 250,
	promotion: 50,
	company: "sneaker company",
	images: [img1Product, img2Product, img3Product, img4Product]
}



const Product = () => {

	const actualPrice = product.price - (product.price * (product.promotion / 100)) 

	return (
		<ProductStyled>
			<ImagesContainer>
				<img src={img1Product} alt="product 1" />
				<GridImages>
					{
						product.images.map(el => {
							return (
								<img src={el} alt="" />
							)
						})
					}
				</GridImages>
			</ImagesContainer>
			<InfoContainer>
				<Info>
					<h3>{ product.company }</h3>
					<h2>{ product.name }</h2>
					<p>{ product.description }</p>
					<span className='price'>{ '$' + actualPrice + '.00' }</span>
					<span className='promotion'>{ product.promotion + '%'}</span>
					<span className='previousPrice'>{ '$' + product.price + '.00' }</span>
					<BtnContainer>
						<ButtonsGroup>
							<button>-</button>
							<span>0</span>
							<button>+</button>
						</ButtonsGroup>
						<BtnAddCart>
							<img src={cartIcon} alt="" />
							<span>Add to Cart</span>
						</BtnAddCart>
					</BtnContainer>
				</Info>
			</InfoContainer>
		</ProductStyled>
	)
}

export default Product;

const ProductStyled = styled(Container)`
	display: flex;
	margin-top: 4rem;
`

const ImagesContainer = styled(Flex)`

	flex-direction: column;
	width: 550px;

	img{
		border-radius: 10px;
	}
` 

const GridImages = styled.div`

	margin-top: 1rem;
	display: grid;
	gap: 1rem;
	grid-template-columns: 1fr 1fr 1fr 1fr;
`

const InfoContainer = styled.div`

	display: flex;
	justify-content: center;
	width: 100%;
`

const Info = styled.div`

	width: 450px;

	h3{
		color: ${({theme}) => theme.primary};
		font-weight: 500;
		text-transform: uppercase;
	}

	h2{
		font-size: 2.5rem;
		margin-top: 1rem;
		margin-bottom: 2rem;
		line-height: 1.2;
	}

	p{
		color: ${({theme}) => theme.secondary};
		line-height: 1.7;
		margin-bottom: 0.5rem;
	}

	span.price{
		font-size: 2rem;
		font-weight: 500;
	}

	span.promotion{
		background-color: ${({theme}) => theme.primaryLight};
		bottom: 5px;
		color: ${({theme}) => theme.primary};
		font-weight: 500;
		padding: 5px;
		position: relative;
		left: 10px;
	}

	span.previousPrice{
		color: ${({theme}) => theme.secondaryLight};
		display: block;
		text-decoration: line-through;
	}
`

const BtnContainer = styled.div`

	display: grid;
	font-weight: 600;
	gap: 1rem;
	grid-template-columns: 150px 1fr;
	margin-top: 2rem;

	button{
		background-color: hsl(223, 64%, 98%);
		color: ${({theme}) => theme.primary};
		font-size: 1.5rem;
		font-weight: 700;
		cursor: pointer;
	}

`

const BtnAddCart = styled(Flex)`

	background-color: ${({theme}) => theme.primary};
	border-radius: 10px;
	color: white;
	justify-content: center;
	gap: 1rem;

	img{
		width: 22px;
	}

	&:hover{
		cursor: pointer;
		opacity: 0.9;
	}
`

const ButtonsGroup = styled(Flex)`

	background-color: hsl(223, 64%, 98%);
	border-radius: 10px;
	justify-content: space-between;
	padding: 0 5px;
` 