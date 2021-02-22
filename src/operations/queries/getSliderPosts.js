import gql from 'graphql-tag';

export const GET_SLIDER_POSTS = gql`
  query getSliderPosts($pagination: Pagination) {
    posts(pagination: $pagination) {
      id
      title
      image
      createdAt
    }
  }
`;
