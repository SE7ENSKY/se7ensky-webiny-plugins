import React from "react";
import styled from "@emotion/styled";
import Slider from "react-slick";

const CarouselPrevArrow = (props) => {
	const { onClick } = props;
	return (
		<div className="slick-arrow slick-arrow_prev" onClick={onClick} />
	);
}

const CarouselNextArrow = (props) => {
	const { onClick } = props;
	return (
		<div className="slick-arrow slick-arrow_next" onClick={onClick} />
	);
}

const Carousel = ({ data: { images } }) => {
	if (!images) return "You must select images to render your image carousel!";

	const settings = {
		dots: false,
		prevArrow: <CarouselPrevArrow />,
		nextArrow: <CarouselNextArrow />
	};


	return (
		<CarouselStyles>
			<Slider {...settings} className="images-slider">
				{images.map(image => (
					<div className="slick-image" key={image.name} >
						<img className="slick-image-i" src={image.src} alt={image.name} />
					</div>
				))}
			</Slider>
		</CarouselStyles>
	);
};

const CarouselStyles = styled("div")`
	.slick-image {
		outline: none;
		&-i {
			width: 100%;
		}
	}
`;

export default Carousel;
