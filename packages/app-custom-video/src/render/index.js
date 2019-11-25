// @flow
import React from "react";
import CustomVideo from "./components/CustomVideo";

export default [
	{
		name: "pb-render-element-custom-video",
		type: "pb-render-page-element",
		elementType: "custom-video",
		render(props) {
			return <CustomVideo {...props} />
		}
	}
];
