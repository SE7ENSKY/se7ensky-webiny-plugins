// @flow
import React from "react";
import { FileManager } from "@webiny/app-admin/components";
import { Grid, Cell } from "@webiny/ui/Grid";
import { ButtonPrimary } from "@webiny/ui/Button";
import VideoPreview from "./VideoPreview";

const CustomVideoFileElementSettings = ({ Bind, form }) => {
	return (
		<React.Fragment>
			<Grid>
				<Cell span={12}>
					<Bind name={"videoUrl"}>
						{({ onChange, value }) => (
							<FileManager
								accept={["video/mp4"]}
								onChange={file => {
									onChange(file.src)
								}}
							>
								{({ showFileManager }) => (
									<div>
										<ButtonPrimary onClick={showFileManager} style={{"margin": "0 0 10px 0"}}>
											Choose video
										</ButtonPrimary>
										<VideoPreview
											file={value}
											onRemove={() =>
												form.setState(state => {
													const next = {
														...state
													};
													next.data.videoUrl = null;
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

export default CustomVideoFileElementSettings;
