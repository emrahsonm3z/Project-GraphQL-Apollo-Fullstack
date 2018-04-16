// -------------------------------------- Global Imports --
import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

// ----------------------------------------------- Query --
const query = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`

// ----------------------------- ExchangeRates Component --
const ExchangeRates = () => (
  <Query query={query}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :(</p>

      return data.rates.map(({ currency, rate }) => (
        <div key={currency}>
          <p>{`${currency}: ${rate}`}</p>
        </div>
      ))
    }}
  </Query>
)

export default ExchangeRates
