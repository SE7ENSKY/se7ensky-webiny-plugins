// @flow
import React from "react";
import Block from "@webiny/app-page-builder/render/plugins/elements/block/Block";

export default[{
		name: "pb-render-element-classname",
		type: "pb-render-page-element",
		elementType: "classname",
		render(props) {
			const { element: { data: { classname } } } = props;
			return (
				<div className={classname}>
					<Block {...props} />
				</div>
			);
		}
	}
];
