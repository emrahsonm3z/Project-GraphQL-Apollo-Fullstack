// -------------------------------------- Global Imports --
import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { string } from 'prop-types'

// ----------------------------------------------- Query --
const GET_DOG_PHOTO = gql`
  query dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`

// ---------------------------------  DogPhoto Component --
export default function DogPhoto({ breed }) {
  return (
    <Query
      query={GET_DOG_PHOTO}
      variables={{ breed }}
      skip={!breed}
      notifyOnNetworkStatusChange
    >
      {({ loading, error, data, refetch, networkStatus }) => {
        if (networkStatus === 4) return 'Refetching!'
        if (loading) return null
        if (error) return `Error!: ${error}`

        return (
          <div>
            <img
              alt=""
              src={data.dog.displayImage}
              style={{ height: 100, width: 100 }}
            />
            <button onClick={() => refetch()}>Refetch!</button>
          </div>
        )
      }}
    </Query>
  )
}

// ------------------------------------------- PropTypes --
DogPhoto.propTypes = {
  breed: string.isRequired,
}
