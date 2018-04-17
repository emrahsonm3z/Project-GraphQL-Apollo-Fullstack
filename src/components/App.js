// --------------------------------------- Global Imports --
import React, { Component } from 'react'

// ------------------------------------ Relative Imports --
import '../styles/App.css'
import FilterLink from './LocalState/FilterLink'

// ---------------------------------------- App Component --
export default class App extends Component {
  render() {
    return (
      <div>
        <FilterLink />
      </div>
    )
  }
}
