// @flow
import React from "react";
import Carousel from "./components/Carousel";

export default [{
		name: "pb-render-element-images-carousel",
		type: "pb-render-page-element",
		elementType: "images-carousel",
		render({ element, theme }) {
			return <Carousel data={element.data} theme={theme} />;
		}
	}
];
