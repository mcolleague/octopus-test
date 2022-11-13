import fetch from 'cross-fetch'
import { gql, ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:3001/?',
    fetch,
  }),
  cache: new InMemoryCache(),
})

export const productsQuery = () =>
  client.query({
    query: gql`
      query Products {
        allProducts {
          pk
          fields
        }
      }
    `,
  })

export default client
