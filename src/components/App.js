// --------------------------------------- Global Imports --
import React, { Component } from 'react'

// ------------------------------------ Relative Imports --
import '../styles/App.css'
import Dogs from './Dogs'
import DogPhoto from './DogPhoto'

// ---------------------------------------- App Component --
class App extends Component {
  state = { selectedDog: null }

  onDogSelected = ({ target }) => {
    this.setState(() => ({ selectedDog: target.value }))
  }

  render() {
    return (
      <div>
        <h2>Building Query components</h2>
        {this.state.selectedDog && <DogPhoto breed={this.state.selectedDog} />}
        <Dogs onDogSelected={this.onDogSelected} />
      </div>
    )
  }
}

// ********************************************************
export default App
