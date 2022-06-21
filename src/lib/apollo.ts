import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ojudvm0bp501z46v9f04kn/master',
  cache: new InMemoryCache(),
})