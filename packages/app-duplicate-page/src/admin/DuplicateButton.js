import React, { useState } from "react";
import { IconButton } from "@webiny/ui/Button";
import { Tooltip } from "@webiny/ui/Tooltip";
import { ReactComponent as CopyIcon } from "./clipboard.svg";
import CategoriesDialog from "@webiny/app-page-builder/admin/views/Categories/CategoriesDialog";


import useReactRouter from "use-react-router";
import { useApolloClient } from "react-apollo";
import { useSnackbar } from "@webiny/app-admin/hooks/useSnackbar";
import { createPage, updateRevision } from "./graphql";

const DuplicateButton = ({ pageDetails }) => {
    const [isShownCategoriesDialog, setShownCategoriesDialog] = useState(false);

  	const { page: { title, content, settings } } = pageDetails;

  	const { history } = useReactRouter();
  	const client = useApolloClient();
  	const { showSnackbar } = useSnackbar();

    const onSelect = category => {
        hideCategoriesDialog();
        onDuplicatePage(category.id);
    };

    const showCategoriesDialog = () => {
        setShownCategoriesDialog(true);
    };

    const hideCategoriesDialog = () => {
        setShownCategoriesDialog(false);
    };

  	const onDuplicatePage = async (categoryId) => {
  		try {
  			const { data: res } = await client.mutate({
  					mutation: createPage,
  					variables: { category: categoryId }
  			});
  			const { data } = res.pageBuilder.page;
  			const { data: resUpd } = await client.mutate({
  				mutation: updateRevision,
  				variables: {
  					id: data.id,
  					data: {
  						title: `${title} – copy`,
  						content: (content.present) ? content.present : content,
  						settings
  					}
  				},
  				refetchQueries: ["CmsListPages"]
  			});
  			if (resUpd) history.push(`/page-builder/editor/${data.id}`);
  		} catch (e){
  			showSnackbar(e.message);
  		}
  	};

    return (
        <>
            <CategoriesDialog
                open={isShownCategoriesDialog}
                onClose={hideCategoriesDialog}
                onSelect={onSelect}
            />
            <Tooltip content={"Duplicate"} placement={"top"}>
                <IconButton icon={<CopyIcon />} onClick={showCategoriesDialog} />
            </Tooltip>
        </>
    );
};

export default DuplicateButton;
