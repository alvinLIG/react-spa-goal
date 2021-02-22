import ApolloClient from 'apollo-client';
import { createUploadLink } from 'apollo-upload-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { AUTH_TOKEN } from './constants';

const httpLink = createUploadLink({
  uri: 'http://localhost:4000/'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN);

  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : null
    }
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  dataIdFromObject: r => r.id,
  cache: new InMemoryCache()
});