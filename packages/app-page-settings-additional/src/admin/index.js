// @flow
import React from "react";
import PageSettingsAdditional from "./components/PageSettingsAdditional";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import render from '../render';

export default [
	...render,
	{
		name: "pb-editor-page-settings-additional",
		type: "pb-editor-page-settings",
		title: "Custom additional fields",
		description: "Add special page params, fields, images for development purposes",
		icon: <FontAwesomeIcon icon={"user-cog"} size={"1x"}  />,
		fields: `
      additional {
        image {
          id
          src
        }
        date
        order
        description
        video {
          id
          src
        }
        fields {
          property
          content
        }
      }
    `,
		render(props: Object) {
			return <PageSettingsAdditional {...props} />;
		}
	}
];
