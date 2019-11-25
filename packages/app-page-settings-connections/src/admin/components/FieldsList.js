// @flow
import React from "react";
import css from "@emotion/css";
import { DynamicFieldset } from "@webiny/ui/DynamicFieldset";
import { ButtonPrimary, ButtonSecondary } from "@webiny/ui/Button";
import { Grid, Cell } from "@webiny/ui/Grid";
import { Typography } from "@webiny/ui/Typography";
import PagesAutoComplete from "./PagesAutoComplete";
import { validation } from "@webiny/validation";

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
								<Typography use={"button"}>Connected pages</Typography>
							</Cell>
						</Grid>
					))}
					{row(({ index }) => (
						<Grid>
							<Cell span={9}>
								<Bind
									name={`${prefix}.${index}`}
									validators={validation.create("required")}
								>
									{({ onChange, ...rest }) => {
										// TODO
										// FIX: the problem with backspase pressing
										// console.log(value);
										return (
											<PagesAutoComplete
												{...rest}
												onChange={(value, selection) => {
													onChange(selection);
												}}
												label={(value && value[index] && value[index].title) ? value[index].title : "Page"}
											/>
										)
									}}
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
									To add new connected page, click{" "}
									<ButtonPrimary onClick={actions.add()}>
										Add Page
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
