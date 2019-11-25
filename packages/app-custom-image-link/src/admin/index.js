// @flow
import React from "react";
import styled from "@emotion/styled";
import {Tab} from "@webiny/ui/Tabs";
import {Cell, Grid} from "@webiny/ui/Grid";
import {Image} from "@webiny/ui/Image";
import {Input} from "@webiny/ui/Input";
import SingleImageUpload from "@webiny/app-admin/components/SingleImageUpload";
import { ReactComponent as DesignIcon } from "@webiny/app-page-builder/editor/plugins/elements/imagesList/icons/round-style-24px.svg";
import { ReactComponent as CustomPreviewIcon } from "./assets/image.svg";

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
		name: "pb-page-element-custom-image-link",
		type: "pb-page-element",
		elementType: "custom-image-link",
		toolbar: {
			title: "Image link",
			group: "pb-editor-element-group-custom",
			preview() {
				return (
					<PreviewBox>
						<CustomPreviewIcon />
					</PreviewBox>
				);
			}
		},
		settings: ["pb-page-element-settings-delete"],
		target: ["column"],
		onCreate: "open-settings",
		create(options = {}) {
			return {
				type: "custom-image-link",
				data: {},
				...options
			};
		},
		render(props) {
			const { element: { data: { image = {} } } } = props;
			return <Image src={image.src} alt={image.name} />;
		}
	},
	{
		name: "pb-page-element-advanced-settings-custom-image-link",
		type: "pb-page-element-advanced-settings",
		elementType: "custom-image-link",
		render({ Bind }) {
			return (
				<Tab icon={<DesignIcon />} label="Options">
					<Grid>
						<Cell span={6}>
							<Bind name={"image"}>
								<SingleImageUpload label="image" />
							</Bind>
						</Cell>
						<Cell span={6}>
							<Bind name={"url"}>
								<Input placeholder="Enter url" />
							</Bind>
						</Cell>
					</Grid>
				</Tab>
			);
		}
	}
];
