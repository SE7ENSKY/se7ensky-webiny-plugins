// @flow
import React from "react";
import CustomImageLink from "./components/CustomImageLink";

export default [
	{
		name: "pb-render-element-custom-image-link",
		type: "pb-render-page-element",
		elementType: "custom-image-link",
		render(props) {
			return <CustomImageLink {...props} />;
		}
	}
];
