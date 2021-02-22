import gql from 'graphql-tag';

export const ADD_POST = gql`
  mutation addPost($title: String!, $content: String, $image: String) {
    addPost(post: {title: $title, content: $content, image: $image}) {
      id
      title
      content
      image
      createdAt
    }
  }
`;
