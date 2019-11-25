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

			&-image {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}

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
					{ file &&
						<img
							className="file__preview-image"
							src={file}
							alt=""
						/>
					}
					<div className="file__preview-icon-download">
						<RemoveIcon onClick={onRemove} />
					</div>
				</div>
			</div>
		</FileStyled>
	);
}
