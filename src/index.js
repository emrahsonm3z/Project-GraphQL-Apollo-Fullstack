// -------------------------------------- Global Imports --
import React from 'react'
import { render } from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

// ------------------------------------ Relative Imports --
import './styles/index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

const client = new ApolloClient({
  uri: 'https://8v9r9kpn7q.lp.gql.zone/graphql',
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
