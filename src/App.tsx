import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { File } from './components/Folder/File'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import gql from 'graphql-tag'
import { Browser } from './components/Browser'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Browser} />
        </div>
      </Router>
    )
  }
}

export default App
