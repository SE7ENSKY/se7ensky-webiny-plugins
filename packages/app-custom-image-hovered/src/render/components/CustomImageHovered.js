import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const CustomImageHovered = ({ element, theme }) => {
	const { data: { url, image = {} } } = element;
	return (
		<CustomImageHoveredWrapper theme={theme}>
			<Link to={url} className="image-hovered">
				<img
					className="image-hovered__image"
					src={image.src}
					alt={image.name}
				/>
				<div className="image-hovered__inner">
					<div className="image-hovered__box image-hovered__box_1" style={{ backgroundImage: `url(${image.src})` }} />
					<div className="image-hovered__box image-hovered__box_2" style={{ backgroundImage: `url(${image.src})` }} />
					<div className="image-hovered__box image-hovered__box_3" style={{ backgroundImage: `url(${image.src})` }} />
					<div className="image-hovered__more" />
				</div>
			</Link>
		</CustomImageHoveredWrapper>
	)
};

const CustomImageHoveredWrapper = styled("div")`
	.image-hovered {
		position: relative;
		display: block;
		text-decoration: none;
		&:hover {
			.image-hovered {
				&__inner {
					opacity: 1;
				}
				&__box {
					&_1 {
						width: 68%;
					}
					&_2 {
						width: 32%;
					}
					&_3 {
						width: 32%;
					}
				}
				&__more {
					width: 68%;
					&:after {
						opacity: 1;
						transform: translateX(0);
					}
				}
			}
		}
		&__image {
			width: 100%;
			height: auto;
			display: block;
		}
		&__inner {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			opacity: 0;
			transition: 0.2s opacity ease-in-out;
		}
		&__box {
			position: absolute;
			width: 0;
			height: 50%;
			transition: 0.4s width ease-in-out;
			&_1 {
				top: 0;
				left: 0;
				background-position: 50% 0;
			}
			&_2 {
				top: 0;
				left: 68%;
				background-position: 70% 50%;
			}
			&_3 {
				left: 0;
				top: 50%;
				background-position: right 0;
			}
		}
		&__more {
			position: absolute;
			left: 32%;
			top: 50%;
			height: 50%;
			width: 0;
			background-color: var(--webiny-pb-theme-text-primary);
			transition: 0.4s width ease-in-out;
			&:after {
				content: '>>>';
				position: absolute;
				right: 4vw;
				bottom: 3.5	vw;
				font-size: 3vw;
				color: var(--webiny-pb-theme-primary);
				opacity: 0;
				transform: translateX(-20px);
				transition: 0.2s opacity 0.4s ease-in-out, 0.2s transform 0.4s ease-in-out;
			}
		}
	}
`;

export default CustomImageHovered;
