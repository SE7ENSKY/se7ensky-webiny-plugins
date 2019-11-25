// @flow
import React from "react";
import FieldsList from "./FieldsList";

const PageSettingsConnections = ({ Bind } : Object) => (
	<Bind name={"settings.connections.pages"} defaultValue={[]}>
		{props => <FieldsList prefix={"settings.connections.pages"} Bind={Bind} {...props} />}
	</Bind>
);

export default PageSettingsConnections;
