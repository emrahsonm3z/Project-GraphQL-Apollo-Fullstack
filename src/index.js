// -------------------------------------- Global Imports --
import React from 'react'
import { render } from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

// ------------------------------------ Relative Imports --
import './styles/index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import { defaults, resolvers } from './resolvers'
import typeDefs from './typeDefs'

const client = new ApolloClient({
  uri: `https://nx9zvp49q7.lp.gql.zone/graphql`,
  clientState: {
    defaults,
    resolvers,
    typeDefs,
  },
})

// -------------------------------- Render App Component --
render(wrapApp(), document.getElementById('root'))
registerServiceWorker()

// ********************************************************
function wrapApp() {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  )
}
