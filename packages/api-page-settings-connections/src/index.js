import { gql } from "apollo-server-lambda";
import { withFields, string, fields, boolean } from "@webiny/commodo";

export default () => [
	{
		name: "pb-page-settings-connections",
		type: "pb-page-settings-model",
		apply({ fields: settingsFields, context }) {
				settingsFields.connections = fields({
						value: {},
						instanceOf: withFields({
								pages: fields({
										value: [],
										list: true,
										instanceOf: withFields({
												id: context.commodo.fields.id(),
												parent: string(),
												published: boolean(),
												title: string(),
												url: string(),
										})()
								})
						})()
				});
		}
	},
	{
		name: "graphql-schema-page-builder-settings-connections",
		type: "graphql-schema",
    schema: {
			typeDefs: gql`
	      type PbConnectedPages {
	        id: ID
	        parent: String
	        published: Boolean
	        title: String
	        url: String
	      }

	      input PbConnectedPagesInput {
	        id: ID
	        parent: String
	        published: Boolean
	        title: String
	        url: String
	      }

	      type PbConnectionsSettings {
	        pages: [PbConnectedPages]
	      }

	      input PbConnectionsSettingsInput {
	        pages: [PbConnectedPagesInput]
	      }

	      extend type PbPageSettings {
	        connections: PbConnectionsSettings
	      }

	      extend input PbPageSettingsInput {
	        connections: PbConnectionsSettingsInput
	      }
	    `
		}
	}
];
