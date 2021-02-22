import gql from 'graphql-tag';

export const ADD_COMMENT = gql`
  mutation addComment($postId: Int!, $content: String!) {
    addComment(postId: $postId, content: $content) {
      id
      postId
      content
      createdAt
    }
  }
`;
