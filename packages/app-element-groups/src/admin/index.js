import React from "react";
import { ReactComponent as CustomIcon } from "./assets/custom.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ([
	{
		name: "pb-editor-element-group-custom",
		type: "pb-editor-page-element-group",
		group: {
			title: "Custom",
			icon: <CustomIcon />
		}
	},
	{
		name: "pb-editor-element-group-modal",
		type: "pb-editor-page-element-group",
		group: {
			title: "Modals",
			icon: <FontAwesomeIcon icon={"object-ungroup"} size={"1x"} />
		}
	},
]);
