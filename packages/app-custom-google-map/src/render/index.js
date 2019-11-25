// @flow
import React from "react";
import CustomGoogleMap from "./components/CustomGoogleMap";

export default [
	{
		name: "pb-render-element-custom-google-map",
		type: "pb-render-page-element",
		elementType: "custom-google-map",
		render(props) {
			return <CustomGoogleMap {...props} />;
		}
	}
];
