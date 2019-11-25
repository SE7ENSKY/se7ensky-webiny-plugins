// @flow
import React from "react";
import PageSettingsConnections from "./components/PageSettingsConnections";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import render from '../render'

export default [
	...render,
	{
		name: "pb-editor-page-settings-connections",
		type: "pb-editor-page-settings",
		title: "Pages connections",
		description: "Add connections",
		icon: <FontAwesomeIcon icon={"bezier-curve"} size={"1x"}  />,
		fields: `
      connections {
        pages {
          id
          parent
          published
          title
          url
        }
      }
    `,
		render(props: Object) {
			return <PageSettingsConnections {...props} />;
		}
	}
];
