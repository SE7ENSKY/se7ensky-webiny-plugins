import gql from "graphql-tag";

const error = `
error {
    code
    message
}`;

export const unpublishPage = gql`
    mutation UnpublishPage($id: ID!){
        pageBuilder{
            unpublishPage(page:$id) {
                data
                error {
                    code
                    message
                }
            }
        }
    }
`;
