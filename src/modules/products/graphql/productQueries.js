import gql from "graphql-tag";

export const CHARACTERS_QUERY = gql`
              query Characters {
                characters {
                  results {
                    id
                    name
                    image
                  }
                }
              }
            `
export const LOGIN = gql`
              query login($loginInput: LoginInput!) {
                login(loginInput: $loginInput) {
                  user {
                    _id
                    name
                    email
                  }
                }
              }
            `