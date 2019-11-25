// @flow
import React from "react";
import CustomImageHovered from "./components/CustomImageHovered";

export default [
	{
		name: "pb-render-element-custom-image-hovered",
		type: "pb-render-page-element",
		elementType: "custom-image-hovered",
		render(props) {
			return <CustomImageHovered {...props} />;
		}
	}
];
