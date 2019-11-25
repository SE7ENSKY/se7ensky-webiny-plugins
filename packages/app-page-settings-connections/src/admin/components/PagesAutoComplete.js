// @flow
import * as React from "react";
import { AutoComplete } from "@webiny/ui/AutoComplete";
import gql from "graphql-tag";
import { get } from "lodash";
import { Query } from "react-apollo";
import { useAutocomplete } from "@webiny/app/hooks/useAutocomplete";

// We utilize the same "listPages" GraphQL field.
const getPage = gql`
    query getPublishedPage($parent: String) {
        pageBuilder {
            page: getPublishedPage(parent: $parent) {
                data {
                    id
                    parent
                    published
                    title
                    url
                }
            }
        }
    }
`;

const listPages = gql`
    query listPublishedPages($search: String) {
        pageBuilder {
            pages: listPublishedPages(search: $search) {
                data {
                    id
                    parent
                    published
                    title
                    url
                }
            }
        }
    }
`;

export default function PagesAutoComplete(props) {

    const autoComplete = useAutocomplete({
      response: data => get(data, "pageBuilder.pages"),
      query: listPages
    });

    return <Query skip={!props.value} variables={{ parent: props.value }} query={getPage}>
        {({ data }) => {
            return (
                <AutoComplete
                  {...props}
                  {...autoComplete}
                  valueProp={"parent"}
                  textProp={"title"}
                  value={get(data, "pageBuilder.page.data")}
                />
            );
        }}
    </Query>

};
