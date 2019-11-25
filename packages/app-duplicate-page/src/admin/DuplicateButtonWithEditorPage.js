import React from "react";
import { getPage } from "@webiny/app-page-builder/editor/selectors";
import { connect } from "@webiny/app-page-builder/editor/redux";
import {isEqual} from 'lodash';
import DuplicateButton from "./DuplicateButton";

const DuplicateButtonWithEditorPage = (props) => {
	return <DuplicateButton {...props} />
};

export default connect(
	state => ({ pageDetails: {page: getPage(state)} }),
	null,
	null,
	{ areStatePropsEqual: isEqual }
)(DuplicateButtonWithEditorPage);
