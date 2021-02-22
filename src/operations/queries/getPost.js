import gql from 'graphql-tag';

export const GET_POST = gql`
  query getPost($id: Int!) {
    post(id: $id) {
      id
      title
      content
      image
      createdAt
      comments {
        id
        postId
        content
        createdAt
      }
    }
  }
`;
