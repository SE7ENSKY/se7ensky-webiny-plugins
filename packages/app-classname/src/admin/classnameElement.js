// @flow
import React from "react";
import { set } from "dot-prop-immutable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { redux } from "@webiny/app-page-builder/editor/redux";
import Block from "@webiny/app-page-builder/editor/plugins/elements/block/Block";
import {
	createElement,
	createRow,
	createColumn,
	cloneElement,
	addElementToParent
} from "@webiny/app-page-builder/editor/utils";
import { updateElement, deleteElement, elementCreated } from "@webiny/app-page-builder/editor/actions";
import { Tab } from "@webiny/ui/Tabs";
import { Cell, Grid } from "@webiny/ui/Grid";
import { Input } from "@webiny/ui/Input";
import styled from "@emotion/styled";

const PreviewBox = styled("div")({
	textAlign: "center",
	margin: "0 auto",
});

export default [
		{
			name: "pb-page-element-classname",
			type: "pb-page-element",
			elementType: "classname",
			toolbar: {
				title: "ClassName",
				group: "pb-editor-element-group-custom",
				preview() {
					return (
						<PreviewBox>
							<span>ClassName</span>
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
			target: ["column", "row"],
			onCreate: "open-settings",
			create(options = {}) {
				return {
					type: "classname",
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
				return <Block {...props} />;
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
			name: "pb-page-element-advanced-settings-classname",
			type: "pb-page-element-advanced-settings",
			elementType: "classname",
			render({ Bind }) {
				return (
					<Tab icon={<FontAwesomeIcon icon={"anchor"} size={"1x"}  />} label="ClassName">
						<Grid>
							<Cell span={12}>
								<Bind name={"classname"}>
									<Input label={"Class"} description={"Enter custom classname"} />
								</Bind>
							</Cell>
						</Grid>
					</Tab>
				);
			}
		}
	];
