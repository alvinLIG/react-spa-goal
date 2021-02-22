import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation authenticate($email: String!, $password: String!) {
    authenticate(email: $email, password: $password)
  }
`;
