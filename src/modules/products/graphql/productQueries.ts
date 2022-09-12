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
export const TASK_LIST_QUERY = gql`
              query Tasks {
                  tasks {
                    task
                    status
                  }
              }
            `
export const LOGIN_QUERY = gql`
              query login($loginInput: LoginInput!) {
                login(loginInput: $loginInput) {
                  user {
                    _id
                    name
                    email
                  }
                  access_token
                }
              }
            `

export const REGISTER_QUERY = gql`
              mutation signup($signupInput: SignupInput!) {
                signup(signupInput: $signupInput) {
                   _id
                   name 
                   email
                   password
                }
              }
            `

export const TASK_CREATE_QUERY = gql`
              mutation createTask($createTaskInput: CreateTaskInput!) {
                  createTask(createTaskInput: $createTaskInput) {
                   task 
                   status
                }
              }
            `