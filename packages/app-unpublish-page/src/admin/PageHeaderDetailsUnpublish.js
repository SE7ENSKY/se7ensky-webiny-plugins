import React from "react";
import { useApolloClient } from "react-apollo";
import { useSnackbar } from "@webiny/app-admin/hooks/useSnackbar";
import UnpublishButton from "./UnpublishButton";
import { unpublishPage } from "./graphql";

const PageHeaderDetailsUnpublish = ({ pageDetails, refreshPages }) => {
	const client = useApolloClient();
	const { showSnackbar } = useSnackbar();

	const onUnpublishPage = async (pageDetails) => {
		try {
			const { page } = pageDetails
			await Promise.all(page.revisions.filter(r => r.published).map(async r => {
				await await client.mutate({
					mutation: unpublishPage,
					variables: {
						id: r.id
					}
				});
			}))
		} catch (e) {
			showSnackbar(e.message);
		}
	}
	return <UnpublishButton refreshPages={refreshPages} onUnpublishPage={onUnpublishPage} pageDetails={pageDetails} showSnackbar={showSnackbar} />
};

export default PageHeaderDetailsUnpublish;
