import React from "react";
import styled from "@emotion/styled";
import ReactPlayer from 'react-player';
import { ReactComponent as RemoveIcon } from "@webiny/app-page-builder/admin/assets/round-close-24px.svg";

const FileStyled = styled("div")`
	svg {
		display: block;
	}
	.file {
		&__body {
			width: 200px;
		}

		&__preview {
			position: relative;
			width: 100%;
			height: 0;
			padding-bottom: 56.23%;

			&-icon-download {
				cursor: pointer;
				left: 100%;
				position: absolute;
				&:hover {
					color: var(--webiny-pb-theme-primary);
				}
			}
		}
	}
`;

export default function File({ file, onRemove }) {
	if (!file) return null;

	return (
		<FileStyled>
			<div className="file__body">
				<div className="file__preview">
					<ReactPlayer
						url={file.src}
						playing={true}
						muted={true}
						controls={false}
						loop={true}
						playsinline={true}
						width="100%"
						height="100%"
						style={{
							position:'absolute',
							pointerEvents: 'none'
						}}
					/>
					<div className="file__preview-icon-download">
						<RemoveIcon onClick={onRemove} />
					</div>
				</div>
			</div>
		</FileStyled>
	);
}
