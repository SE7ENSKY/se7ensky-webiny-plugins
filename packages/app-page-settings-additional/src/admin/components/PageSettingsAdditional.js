// @flow
import React from "react";
import { DelayedOnChange } from "@webiny/app-page-builder/editor/components/DelayedOnChange";
import { Grid, Cell } from "@webiny/ui/Grid";
import { Input } from "@webiny/ui/Input";
import SingleImageUpload from "@webiny/app-admin/components/SingleImageUpload";
import { FileManager } from "@webiny/app-admin/components";
import { ButtonPrimary } from "@webiny/ui/Button";
import VideoPreview from "./VideoPreview";
import FieldsList from "./FieldsList";

const PageSettingsAdditional = ({ Bind, form }: Object) => {
    return (
        <React.Fragment>
            <Grid>
                <Cell span={12}>
                    <Bind name={"settings.additional.description"}>
                        <DelayedOnChange>
                            <Input
                                label="Description"
                            />
                        </DelayedOnChange>
                    </Bind>
                </Cell>
                <Cell span={12}>
                  <Bind name={"settings.additional.video"}>
                    {({ onChange, value }) => (
                      <FileManager
                        accept={["video/mp4"]}
                        onChange={file => {
                          onChange(file)
                        }}
                      >
                        {({ showFileManager }) => (
                          <div style={{"display": "flex"}}>
                            <ButtonPrimary onClick={showFileManager} style={{"margin": "0 20px 10px 0"}}>
                              Choose video
                            </ButtonPrimary>
                            <VideoPreview
                              file={value}
                              onRemove={() =>
                                form.setState(state => {
                                  const next = {
                                    ...state
                                  };
                                  next.data.settings.additional.video = null;
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
                <Cell span={12}>
                  <Bind name={"settings.additional.image"}>
                    <SingleImageUpload label="Image" />
                  </Bind>
                </Cell>
                <Cell span={6}>
                    <Bind name={"settings.additional.date"}>
                        <DelayedOnChange>
                            <Input
                                label="Date"
                                type="date"
                            />
                        </DelayedOnChange>
                    </Bind>
                </Cell>
                <Cell span={6}>
                    <Bind name={"settings.additional.order"}>
                        <DelayedOnChange>
                            <Input
                                label="Order"
                                type="number"
                            />
                        </DelayedOnChange>
                    </Bind>
                </Cell>
            </Grid>

            <Bind name={"settings.additional.fields"} defaultValue={[]}>
                {props => <FieldsList prefix={"settings.additional.fields"} Bind={Bind} {...props} />}
            </Bind>
        </React.Fragment>
    );
};

export default PageSettingsAdditional;
