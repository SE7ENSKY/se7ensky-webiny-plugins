import { gql } from "apollo-server-lambda";
import { withFields, string, fields } from "@webiny/commodo";

if (window.DEBUG) console.log("test35");

export default () => [
  {
    name: "pb-page-settings-additional",
    type: "pb-page-settings-model",
    apply({ fields: settingsFields, context }) {
      settingsFields.additional = fields({
        value: {},
        instanceOf: withFields({
          fields: fields({
            value: [],
            list: true,
            instanceOf: withFields({
              property: string(),
              content: string()
            })()
          }),
          date: string(),
          order: string(),
          description: string(),
          image: context.commodo.fields.id(),
          video: context.commodo.fields.id()
        })()
      });
    }
  },
  {
    name: "graphql-schema-page-builder-settings-additional",
    type: "graphql-schema",
    schema: {
      typeDefs: gql`
        type PbAdditionalCustomFields {
          property: String
          content: String
        }

        input PbAdditionalCustomFieldsInput {
          property: String!
          content: String!
        }

        type PbAdditionalSettings {
          date: String
          order: String
          description: String
          fields: [PbAdditionalCustomFields]
          image: File
          video: File
        }

        input PbAdditionalSettingsInput {
          date: String
          order: String
          description: String
          fields: [PbAdditionalCustomFieldsInput!]
          image: RefInput
          video: RefInput
        }

        extend type PbPageSettings {
          additional: PbAdditionalSettings
        }

        extend input PbPageSettingsInput {
          additional: PbAdditionalSettingsInput
        }
      `,
      resolvers: {
        PbAdditionalSettings: {
          image: ({ image }) => {
            return image ? { __typename: "File", id: image } : null;
          },
          video: ({ video }) => {
            return video ? { __typename: "File", id: video } : null;
          }
        }
      }
    }
  }
];
