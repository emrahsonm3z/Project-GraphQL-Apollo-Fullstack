// -------------------------------------- Global Imports --
import React from 'react'
import gql from 'graphql-tag'
import { Query, Mutation } from 'react-apollo'

// ----------------------------------------------- Query --
const GET_TODOS = gql`
  {
    todos {
      id
      type
    }
  }
`

const UPDATE_TODO = gql`
  mutation updateTodo($id: String!, $type: String!) {
    updateTodo(id: $id, type: $type) {
      id
      type
    }
  }
`

// ------------------------------------- Todos Component --
const Todos = () => (
  <Query query={GET_TODOS}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :(</p>

      return data.todos.map(({ id, type }) => {
        let input

        return (
          <Mutation mutation={UPDATE_TODO} key={id}>
            {updateTodo => (
              <div>
                <p>{type}</p>
                <form
                  onSubmit={e => {
                    e.preventDefault()
                    updateTodo({
                      variables: { id, type: input.value },
                    })

                    input.value = ''
                  }}
                >
                  <input
                    ref={node => {
                      input = node
                    }}
                  />
                  <button type="submit">Update Todo</button>
                </form>
              </div>
            )}
          </Mutation>
        )
      })
    }}
  </Query>
)

export default Todos
