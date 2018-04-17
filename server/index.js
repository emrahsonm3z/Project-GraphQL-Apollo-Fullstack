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
app.listen(3000, serverListenCB)

// ********************************************************
function serverListenCB() {
  console.log('Go to http://localhost:3000/graphiql to run queries!')
}
