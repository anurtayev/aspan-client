import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { File } from './components/Folder/File'

import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'

const client = new ApolloClient({
  uri: 'http://localhost:4000/'
})

client
  .query({
    query: gql`
      {
        getRootFolderEntries {
          id
          isFile
          metaData {
            tags
            attributes
          }
        }
      }
    `
  })
  .then(result => console.log(result))

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App
