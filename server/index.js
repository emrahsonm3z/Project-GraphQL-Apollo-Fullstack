const express = require('express')
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')

// ------------------------------------ Relative Imports --
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

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
