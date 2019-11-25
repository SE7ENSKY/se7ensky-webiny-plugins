// @flow
import React from "react";
import CustomVideoBg from "./components/CustomVideoBg";

export default [
	{
		name: "pb-render-element-custom-video-bg",
		type: "pb-render-page-element",
		elementType: "custom-video-bg",
		render(props) {
			return <CustomVideoBg {...props} />
		}
	}
];
