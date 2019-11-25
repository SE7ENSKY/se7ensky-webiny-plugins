// @flow
import React from "react";
import ReactPlayer from 'react-player';
import styled from "@emotion/styled";
import LazyLoad from 'react-lazyload';
import Block from "@webiny/app-page-builder/render/plugins/elements/block/Block";

const CustomVideoBg = (props) => {
	const { element: { data: { videoUrl } } } = props;

	return (
		<CustomVideoBgStyles>
			<div className="video-bg">
				<div className="video-bg__frame">
					<LazyLoad offset={100}>
						<ReactPlayer
							url={videoUrl}
							playing={true}
							muted={true}
							controls={false}
							loop={true}
							playsinline={true}
							width="100%"
							height="100%"
							style={{
								position:'absolute',
								pointerEvents: 'none'
							}}
						/>
					</LazyLoad>
				</div>
				<div className="video-bg__content">
					<Block {...props} />
				</div>
			</div>
		</CustomVideoBgStyles>
	)
};

const CustomVideoBgStyles = styled("div")`
	.video-bg {
		position: relative;
		overflow: hidden;
		&__frame {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			video {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}
`;

export default CustomVideoBg;
