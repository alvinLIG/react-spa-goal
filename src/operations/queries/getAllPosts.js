import gql from 'graphql-tag';

export const GET_ALL_POSTS = gql`
  query getAllPosts {
    posts {
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
