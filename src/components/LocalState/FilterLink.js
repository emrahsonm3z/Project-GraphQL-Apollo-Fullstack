// --------------------------------------- Global Imports --
import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Link from './Link'

const GET_VISIBILITY_FILTER = gql`
  {
    visibilityFilter @client
  }
`

// Remember to set a initial value for visibilityFilter with defaults
const FilterLink = ({ filter, children }) => (
  <Query query={GET_VISIBILITY_FILTER}>
    {({ data, client }) => (
      <Link
        onClick={() => client.writeData({ data: { visibilityFilter: filter } })}
        active={data.visibilityFilter === filter}
      >
        {children}
      </Link>
    )}
  </Query>
)

export default FilterLink
