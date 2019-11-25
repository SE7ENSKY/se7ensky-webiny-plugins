import React from "react";
import styled from "@emotion/styled";
import ReactPlayer from 'react-player';
import LazyLoad from 'react-lazyload';

const CustomVideoStyled = styled("div")`
	.react-player {
		&__play-icon {
			border-width: 26px 0px 26px 41px !important;
			margin-left: 13px !important;
		}
		&__shadow {
			background: none !important;
			border-radius: 50% !important;
			width: 100px !important;
			height: 100px !important;
			border: 3px solid #fff !important;
			transition: 0.2s transform ease-in-out;
			&:hover {
				transform: scale(1.1);
			}
		}
	}

`;

const CustomVideo = ({ element, theme }) => {
	const { data: {
		coverUrl,
		videoUrl,
		ratio,
		autoPlay,
		muted,
		controls,
		loop,
		playsinline,
		disabled,
		radiusTopLeft,
		radiusTopRight,
		radiusBottomRight,
		radiusBottomLeft
	} } = element;
	const ratioValue = parseFloat(ratio);

	return (
		<CustomVideoStyled>
			<div style={{
				position: "relative",
				width: "100%",
				minWidth: 200,
				height: 0,
				overflow: "hidden",
				paddingBottom: 100 / (ratioValue ? ratioValue : 1.7777777778) + "%",
				borderTopLeftRadius: radiusTopLeft ? parseFloat(radiusTopLeft) : 0,
				borderTopRightRadius: radiusTopRight ? parseFloat(radiusTopRight) : 0,
				borderBottomRightRadius: radiusBottomRight ? parseFloat(radiusBottomRight) : 0,
				borderBottomLeftRadius: radiusBottomLeft ? parseFloat(radiusBottomLeft) : 0,
				transform: "translate3d(0,0,0)"
			}}>
				<div style={{
					position:'absolute',
					top:'-1px',
					left:'-1px',
					right:'-1px',
					bottom:'-1px',
					pointerEvents: disabled ? 'none' : 'auto'
				}}>
					<LazyLoad offset={100}>
						<ReactPlayer
							url={videoUrl}
							light={coverUrl}
							playing={autoPlay}
							muted={muted}
							controls={controls}
							loop={loop}
							playsinline={playsinline}
							width="100%"
							height="100%"
						/>
					</LazyLoad>
				</div>
			</div>
		</CustomVideoStyled>
	)
};

export default CustomVideo;
