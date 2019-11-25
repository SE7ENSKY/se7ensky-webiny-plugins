import React, { Fragment, useState } from "react";
import { IconButton } from "@webiny/ui/Button";
import { Tooltip } from "@webiny/ui/Tooltip";
import { ReactComponent as UnpublishIcon } from "./unpublish.svg";

const UnpublishButton = ({ onUnpublishPage, pageDetails, refreshPages, showSnackbar }) => {
	if (pageDetails.page.revisions === undefined || pageDetails.page.revisions.filter(r => r.published === true).length === 0)
		return null;
	return <Fragment>
		<Tooltip content={"Unpublish"} placement={"top"} >
			<IconButton icon={<UnpublishIcon />} onClick={async () => {
				await onUnpublishPage(pageDetails);
				refreshPages();
				showSnackbar("Unpublished.")
			}} />
		</Tooltip>
	</Fragment>
};


export default UnpublishButton;
