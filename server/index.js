import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'

// ------------------------------------ Relative Imports --
import typeDefs from './typeDefs'
import resolvers from './resolvers'

// -------------------------------------- GraphQL Schema --
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

// ---------------------------------------------- Server --
const app = express()

// ------------------------------------------ Middleware --
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

// --------------------------------------- Server Listen --
const PORT = process.env.PORT || 5000

app.listen(PORT, serverListenCB)

// ********************************************************
function serverListenCB() {
  console.log(`GrapghQL server running on port: ${PORT}.`)
}
