import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const CustomImageLink = ({ element, theme }) => {
	const { data: { url, image = {} } } = element;
	return (
		<CustomImageLinkWrapper theme={theme}>
			<Link to={url} className="image-link">
				<img
					className="image-link__i"
					src={image.src}
					alt={image.name}
				/>
			</Link>
		</CustomImageLinkWrapper>
	)
};

const CustomImageLinkWrapper = styled("div")`
	width: 100%;
	height: 100%;
	overflow: hidden;
	.image-link {
		position: relative;
		display: block;
		width: 100%;
		height: 100%;
		text-decoration: none;
		&__i {
			display: block;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
`;

export default CustomImageLink;
