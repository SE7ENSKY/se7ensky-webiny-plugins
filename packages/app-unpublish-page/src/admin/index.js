import React from "react";
import PageHeaderDetailsUnpublish from "./PageHeaderDetailsUnpublish";

export default [
	{
		name: "pb-page-details-header-unpublish",
		type: "pb-page-details-header-left",
		render(props) {
			return <PageHeaderDetailsUnpublish {...props} />;
		}
	}
];
