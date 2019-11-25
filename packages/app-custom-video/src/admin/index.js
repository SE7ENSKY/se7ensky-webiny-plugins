// @flow
import React from "react";
import styled from "@emotion/styled";
import { Tab } from "@webiny/ui/Tabs";
import { Cell, Grid } from "@webiny/ui/Grid";
import { Input } from "@webiny/ui/Input";
import { Checkbox } from "@webiny/ui/Checkbox";
import CustomVideo from "../render/components/CustomVideo";
import CustomVideoFileElementSettings from "./CustomVideoFileElementSettings";
import CustomVideoFileCoverSettings from "./CustomVideoFileCoverSettings";

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
		name: "pb-page-element-custom-video",
		type: "pb-page-element",
		elementType: "custom-video",
		toolbar: {
			title: "Custom video",
			group: "pb-editor-element-group-custom",
			preview() {
				return (
					<PreviewBox>
						<VideoIcon />
					</PreviewBox>
				);
			}
		},
		settings: ["pb-page-element-settings-delete"],
		target: ["column"],
		onCreate: "open-settings",
		create(options = {}) {
			return {
				type: "custom-video",
				data: {
					ratio: "1.7777777778",
					autoPlay: true,
					muted: true,
					controls: false,
					loop: true,
					playsinline: true,
					disabled: true,
				},
				...options
			};
		},
		render(props) {
			return <CustomVideo {...props} />;
		}
	},
	{
		name: "pb-page-element-advanced-settings-custom-video",
		type: "pb-page-element-advanced-settings",
		elementType: "custom-video",
		render(props) {
			const { Bind } = props;
			return (
				<Tab icon={<DesignIcon />} label="Options">
					<Grid>
						<Cell span={12}>
							<Grid>
								<Cell span={8}>
									<Bind name={"coverUrl"}>
										<Input placeholder="Enter video cover URL" />
									</Bind>
								</Cell>
								<Cell span={4}>
									<CustomVideoFileCoverSettings {...props} />
								</Cell>
							</Grid>
						</Cell>
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
									<Grid>
										<Cell span={8} align={"middle"} phone={6}>
											<div style={{textAlign: "right"}}>Ratio:</div>
										</Cell>
										<Cell span={4} align={"middle"} phone={6}>
											<Bind name={"ratio"}>
												<Input description={"16/9 = 1.7777777778"} type={"number"}/>
											</Bind>
										</Cell>
									</Grid>
								</Cell>
								<Cell span={4}>
									<CustomVideoFileElementSettings {...props} />
								</Cell>
							</Grid>
						</Cell>

						<Cell span={4}>
							<Bind name={"autoPlay"}>
								<Checkbox label={"AutoPlay"}/>
							</Bind>
						</Cell>
						<Cell span={4}>
							<Bind name={"muted"}>
								<Checkbox label={"Muted"}/>
							</Bind>
						</Cell>
						<Cell span={4}>
							<Bind name={"controls"}>
								<Checkbox label={"Controls"}/>
							</Bind>
						</Cell>
						<Cell span={4}>
							<Bind name={"loop"}>
								<Checkbox label={"Loop"}/>
							</Bind>
						</Cell>
						<Cell span={4}>
							<Bind name={"playsinline"}>
								<Checkbox label={"Plays Inline (HTML5 Video)"}/>
							</Bind>
						</Cell>
						<Cell span={4}>
							<Bind name={"disabled"}>
								<Checkbox label={"Disable Interactions"}/>
							</Bind>
						</Cell>
					</Grid>
					<Grid>
						<Cell span={3} phone={6}>
							<Bind name={"radiusTopLeft"}>
								<Input description={"Radius top left (px)"} type={"number"}/>
							</Bind>
						</Cell>
						<Cell span={3} phone={6}>
							<Bind name={"radiusTopRight"}>
								<Input description={"Radius top right (px)"} type={"number"}/>
							</Bind>
						</Cell>
						<Cell span={3} phone={6}>
							<Bind name={"radiusBottomRight"}>
								<Input description={"Radius bottom right (px)"} type={"number"}/>
							</Bind>
						</Cell>
						<Cell span={3} phone={6}>
							<Bind name={"radiusBottomLeft"}>
								<Input description={"Radius bottom left (px)"} type={"number"}/>
							</Bind>
						</Cell>
					</Grid>
				</Tab>
			);
		}
	}
];
