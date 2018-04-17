// -------------------------------------- Global Imports --
import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { func } from 'prop-types'

// ----------------------------------------------- Query --
const GET_DOGS = gql`
  {
    dogs {
      id
      breed
    }
  }
`

// -------------------------------------- Dogs Component --
export default function Dogs({ onDogSelected }) {
  return (
    <Query query={GET_DOGS}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...'
        if (error) return `Error! ${error.message}`

        return (
          <select name="dog" onChange={onDogSelected}>
            {data.dogs.map(dog => (
              <option key={dog.id} value={dog.breed}>
                {dog.breed}
              </option>
            ))}
          </select>
        )
      }}
    </Query>
  )
}

// ------------------------------------------- PropTypes --
Dogs.propTypes = { onDogSelected: func.isRequired }
