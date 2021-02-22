import gql from 'graphql-tag';

export const EDIT_POST = gql`
  mutation editPost($id: Int, $title: String!, $content: String, $image: String) {
    updatePost(post: {id: $id, title: $title, content: $content, image: $image}) {
      id
      title
      content
      image
    }
  }
`;
