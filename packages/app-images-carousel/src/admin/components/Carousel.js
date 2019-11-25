// @flow
import * as React from "react";
import { Carousel as CarouselPlugin } from "@webiny/ui/Carousel";
import styled from "@emotion/styled";

const CarouselWrapper = styled("div")({
	width: "100%",
	height: "100%",
	maxWidth: "1000px",
	margin: "auto"
});

class Carousel extends React.PureComponent {
	onImageLoad() {
		setTimeout(() => {
			window.dispatchEvent(new Event('resize'));
		}, 0);
	}

	render() {
		const { data: { images } } = this.props;
		if (!images) return "You must select images to render your image carousel!";

		return (
			<CarouselWrapper>
				<CarouselPlugin>
					{images.map(image => (
						<img src={image.src} key={image.name} onLoad={this.onImageLoad} />
					))}
				</CarouselPlugin>
			</CarouselWrapper>
		);
	}
};

export default Carousel;
