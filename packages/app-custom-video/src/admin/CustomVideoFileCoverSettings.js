import React from "react";
import { FileManager } from "@webiny/app-admin/components";
import { Grid, Cell } from "@webiny/ui/Grid";
import { ButtonPrimary } from "@webiny/ui/Button";
import ImagePreview from "./ImagePreview";

const CustomVideoFileCoverSettings = ({ Bind, form }) => {
	return (
		<React.Fragment>
			<Grid>
				<Cell span={12}>
					<Bind name={"coverUrl"}>
						{({ onChange, value }) => (
							<FileManager
								accept={["image/jpg", "image/jpeg", "image/png"]}
								onChange={file => {
									onChange(file.src)
								}}
							>
								{({ showFileManager }) => (
									<div>
										<ButtonPrimary onClick={showFileManager} style={{"margin": "0 0 10px 0"}}>
											Choose cover
										</ButtonPrimary>
										<ImagePreview
											file={value}
											onRemove={() =>
												form.setState(state => {
													const next = {
														...state
													};
													next.data.coverUrl = null;
													return next;
												})
											}
										/>
									</div>
								)}
							</FileManager>
						)}
					</Bind>
				</Cell>
			</Grid>
		</React.Fragment>
	);
};

export default CustomVideoFileCoverSettings;
