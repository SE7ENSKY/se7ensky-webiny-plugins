// @flow
import React from "react";
import { trim } from "lodash";
import { DynamicFieldset } from "@webiny/ui/DynamicFieldset";
import { ButtonPrimary, ButtonSecondary } from "@webiny/ui/Button";
import { Grid, Cell } from "@webiny/ui/Grid";
import { Input } from "@webiny/ui/Input";
import { Typography } from "@webiny/ui/Typography";
import { validation } from "@webiny/validation";
import css from "@emotion/css";

type Props = {
	prefix: string,
	value: Array<Object>,
	onChange: Function,
	Bind: React.ComponentType<*>
};

const controlButtons = css({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	">button": {
		marginRight: 15
	}
});

const textStyling = css({
	color: "var(--mdc-theme-text-secondary-on-background)"
});

const FieldsList = ({ prefix, value, onChange, Bind, ...other }: Props) => {
	return (
		<DynamicFieldset value={value} onChange={onChange} {...other}>
			{({ actions, header, row, empty }) => (
				<React.Fragment>
					{header(() => (
						<Grid style={{ paddingTop: 0, paddingBottom: 0 }}>
							<Cell span={12} className={textStyling}>
								<Typography use={"button"}>Additional field</Typography>
							</Cell>
						</Grid>
					))}
					{row(({ index }) => (
						<Grid>
							<Cell span={3}>
								<Bind
									name={`${prefix}.${index}.property`}
									validators={validation.create("required")}
									beforeChange={(tag, cb) => cb(trim(tag))}
								>
									<Input label={"Property"} />
								</Bind>
							</Cell>
							<Cell span={6}>
								<Bind name={`${prefix}.${index}.content`} validators={validation.create("required")}>
									<Input label={"Content"} />
								</Bind>
							</Cell>
							<Cell span={3} className={controlButtons}>
								<ButtonPrimary small onClick={actions.add(index)}>
									+
								</ButtonPrimary>
								<ButtonSecondary small onClick={actions.remove(index)}>
									-
								</ButtonSecondary>
							</Cell>
						</Grid>
					))}
					{empty(() => (
						<Grid>
							<Cell span={12} className={textStyling}>
								<Typography use={"button"}>
									To add new custom field, click{" "}
									<ButtonPrimary onClick={actions.add()}>
										Additional field
									</ButtonPrimary>
								</Typography>
							</Cell>
						</Grid>
					))}
				</React.Fragment>
			)}
		</DynamicFieldset>
	);
};

export default FieldsList;
