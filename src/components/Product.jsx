import React from 'react';
import styled from 'styled-components';
import { Container, Flex } from '../styles';

import img1Product from '../assets/images/image-product-1.jpg';
import img2Product from '../assets/images/image-product-2.jpg';
import img3Product from '../assets/images/image-product-3.jpg';
import img4Product from '../assets/images/image-product-4.jpg';

import cartIcon from '../assets/images/icon-cart.svg';

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
				<HeroImage src={img1Product} alt="product 1" />
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
			<div>
				<h3>{ product.company }</h3>
				<h2>{ product.name }</h2>
				<p>{ product.description }</p>
				<span>{ '$' + actualPrice }</span>
				<span>{ product.promotion + '%'}</span>
				<span>{ product.price }</span>
				<div>
					<div>
						<button>-</button>
						<span>0</span>
						<button>+</button>
					</div>
					<div>
						<img src={cartIcon} alt="" />
						<span>Add to Cart</span>
					</div>
				</div>
			</div>
		</ProductStyled>
	)
}

export default Product;

const ProductStyled = styled(Container)`
	margin-top: 4rem;
	display: flex;
`

const HeroImage = styled.img`
`

const ImagesContainer = styled(Flex)`

	flex-direction: column;
	width: 600px;

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
