// @flow
import React from "react";
import { Tab } from "@webiny/ui/Tabs";
import ImagesListImagesSettings from "@webiny/app-page-builder/editor/plugins/elements/imagesList/ImagesListImagesSettings";
import { ReactComponent as ImageGalleryIcon } from "@webiny/app-page-builder/editor/plugins/elements/imagesList/icons/round-photo_library-24px.svg";
import { ReactComponent as ImagesIcon } from "@webiny/app-page-builder/admin/assets/round-photo_library-24px.svg";
import styled from "@emotion/styled";
import { ElementRoot } from "@webiny/app-page-builder/render/components/ElementRoot";

import Carousel from "./components/Carousel";
import render from "../render";

const PreviewBox = styled("div")({
	textAlign: "center",
	margin: "0 auto",
	width: 50,
	svg: {
		width: 50
	}
});

export default [
	...render,
	{
		name: "pb-page-element-images-carousel",
		type: "pb-page-element",
		elementType: "images-carousel",
		toolbar: {
			title: "Image Carousel",
			group: "pb-editor-element-group-custom",
			preview() {
				return (
					<PreviewBox>
						<ImageGalleryIcon />
					</PreviewBox>
				);
			}
		},
		settings: ["pb-page-element-settings-delete"],
		target: ["column"],
		onCreate: "open-settings",
		create(options = {}) {
			return {
				type: "images-carousel",
				data: {
					component: "pb-page-element-images-list-component-mosaic",
					settings: {
						margin: {
							desktop: { all: 0 },
							mobile: { all: 0 }
						},
						padding: {
							desktop: { all: 0 },
							mobile: { all: 0 }
						}
					}
				},
				...options
			};
		},
		render({ element }) {
			return <ElementRoot element={element}>
				<Carousel data={element.data} />;
			</ElementRoot>
		}
	},
	{
		name: "pb-page-element-advanced-settings-images-carousel-filter",
		type: "pb-page-element-advanced-settings",
		elementType: "images-carousel",
		render(props: Object) {
			return (
				<Tab icon={<ImagesIcon />} label="Images">
					<ImagesListImagesSettings {...props} filter />
				</Tab>
			);
		}
	},
];
