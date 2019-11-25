import React from "react";
import DuplicateButton from "./DuplicateButton";
import DuplicateButtonWithEditorPage from "./DuplicateButtonWithEditorPage";
import Divider from "@webiny/app-page-builder/editor/plugins/defaultBar/components/Divider";

export default ([
	{
		name: "pb-page-details-header-duplicate",
		type: "pb-page-details-header-left",
		render(props) {
			return <DuplicateButton {...props} />;
		}
	},
	{
		name: "pb-editor-default-bar-right-duplicate-button",
		type: "pb-editor-default-bar-right",
		render(props) {
			return <DuplicateButtonWithEditorPage />;
		}
	},
	{
		name: "pb-editor-default-bar-right-duplicate-divider",
		type: "pb-editor-default-bar-right",
		render() {
			return <Divider />;
		}
	}
]);
