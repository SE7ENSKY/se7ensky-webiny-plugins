// @flow
import React from "react";
import styled from "@emotion/styled";
import { Tab } from "@webiny/ui/Tabs";
import { Cell, Grid } from "@webiny/ui/Grid";
import { Input } from "@webiny/ui/Input";
import { createBlock, createRow, createColumn } from "@webiny/app-page-builder/editor/utils";
import Block from "@webiny/app-page-builder/editor/plugins/elements/block/Block";

import CustomVideoBg from "../render/components/CustomVideoBg";
import CustomVideoFileElementSettings from "./CustomVideoFileElementSettings";

import { ReactComponent as VideoIcon } from "./video.svg";
import { ReactComponent as DesignIcon } from "@webiny/app-page-builder/editor/plugins/elements/imagesList/icons/round-style-24px.svg";

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
		name: "pb-page-element-custom-video-bg",
		type: "pb-page-element",
		elementType: "custom-video-bg",
		toolbar: {
			title: "Custom video background",
			group: "pb-editor-element-group-custom",
			preview() {
				return (
					<PreviewBox>
						<VideoIcon />
					</PreviewBox>
				);
			}
		},
		settings: [
			"pb-page-element-settings-background",
			"pb-page-element-settings-animation",
			"",
			"pb-page-element-settings-border",
			"pb-page-element-settings-shadow",
			"",
			"pb-page-element-settings-padding",
			"pb-page-element-settings-margin",
			"pb-page-element-settings-width",
			"pb-page-element-settings-height",
			"pb-page-element-settings-horizontal-align-flex",
			"pb-page-element-settings-vertical-align",
			"",
			"pb-page-element-settings-clone",
			"pb-page-element-settings-delete",
			""
		],
		target: ["column"],
		onCreate: "open-settings",
		create(options = {}) {
			return {
				type: "custom-video-bg",
				elements: [
					createRow({
						elements: [createColumn({ data: { width: 100 } })]
					})
				],
				data: {
					settings: {
						margin: {
							mobile: { all: 0 },
							desktop: { all: 0 }
						},
						padding: {
							mobile: { all: 0 },
							desktop: { all: 0 }
						}
					}
				},
				...options
			};
		},
		render(props) {
			return <div style={{padding:"20px 0"}}><Block {...props} /></div>;
		},
		// This callback is executed when another element is dropped on the drop zones with type "block"
		onReceived({ source, target, position = null }) {
			let dispatchNew = false;
			let element;
			if (source.path) {
				// $FlowFixMe
				element = cloneElement(source);
			} else {
				dispatchNew = true;
				element = createElement(source.type, {}, target);
			}

			const block = addElementToParent(element, target, position);

			// Dispatch update action
			redux.store.dispatch(updateElement({ element: block }));

			// Delete exiting element
			if (source.path) {
				redux.store.dispatch(deleteElement({ element: source }));
			}

			if (dispatchNew) {
				redux.store.dispatch(elementCreated({ element, source }));
			}
		},
		onChildDeleted({ element }) {
			if (element.elements.length === 0) {
				element = set(element, "elements", [
					createRow({
						elements: [createColumn({ data: { width: 100 } })]
					})
				]);

				redux.store.dispatch(updateElement({ element }));
			}
		},
	},
	{
		name: "pb-page-element-advanced-settings-custom-video-bg",
		type: "pb-page-element-advanced-settings",
		elementType: "custom-video-bg",
		render(props) {
			const { Bind } = props;
			return (
				<Tab icon={<DesignIcon />} label="Options">
					<Grid>
						<Cell span={12}>
							<Grid>
								<Cell span={8}>
									<Grid>
										<Cell span={12}>
											<Bind name={"videoUrl"}>
												<Input placeholder="Enter video URL" />
											</Bind>
											<br/><br/>
										</Cell>
									</Grid>
								</Cell>
								<Cell span={4}>
									<CustomVideoFileElementSettings {...props} />
								</Cell>
							</Grid>
						</Cell>
					</Grid>
				</Tab>
			);
		}
	}
];
