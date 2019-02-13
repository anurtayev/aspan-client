import React, { useState } from 'react'
import './App.css'
import { Browser } from './components/Browser'
import { NavBar } from './components/NavBar'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { TEntryId } from './model'

const getQuery = (folder: TEntryId) => gql`
  {
    getFolderEntries(id: "${folder}") {
      id
      type
      name
    }
  }
`

export default () => {
  const [currentFolder, setCurrentFolder] = useState('/')

  return (
    <Query query={getQuery(currentFolder)}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...'
        if (error) return `Error! ${error.message}`

        const gotoFolder = (folder: TEntryId): void => setCurrentFolder(folder)

        return (
          <div className="App">
            <NavBar gotoFolder={gotoFolder} currentFolder={currentFolder} />
            <Browser entries={data.getFolderEntries} gotoFolder={gotoFolder} />
          </div>
        )
      }}
    </Query>
  )
}
