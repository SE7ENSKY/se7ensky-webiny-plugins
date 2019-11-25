import gql from "graphql-tag";

const error = `
error {
    code
    message
}`;

export const createPage = gql`
    mutation PbCreatePage($category: ID!) {
        pageBuilder {
            page: createPage(data: { category: $category }) {
                data {
                    id
                    settings {
                        general {
                            layout
                        }
                    }
                }
                ${error}
            }
        }
    }
`;

export const updateRevision = gql`
    mutation UpdateRevision($id: ID!, $data: PbUpdatePageInput!) {
        pageBuilder {
            updateRevision(id: $id, data: $data) {
                data {
                    id
                    content
                    title
                    published
                    savedOn
                }
                error {
                    code
                    message
                    data
                }
            }
        }
    }
`;
