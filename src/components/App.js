// --------------------------------------- Global Imports --
import React, { Component } from 'react'

// ------------------------------------ Relative Imports --
import '../styles/App.css'
import AddTodo from './Todos/AddTodo'
import Todos from './Todos/Todos'

// ---------------------------------------- App Component --
class App extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <Todos />
      </div>
    )
  }
}

// ********************************************************
export default App
