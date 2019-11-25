import { gql } from "apollo-server-lambda";
import unpublishPage from "./pageResolvers/unpublishPage";

const pageFetcher = ctx => ctx.models.PbPage;

export default () => [
  {
    name: "graphql-schema-page-unpublish",
    type: "graphql-schema",
    schema: {
      typeDefs: gql`
          extend type PbMutation {
            unpublishPage(page: ID!): PbBooleanResponse
        }
      `,
      resolvers: {
        PbMutation: {
          unpublishPage: unpublishPage(pageFetcher),
        }
      }
    }
  }
];
