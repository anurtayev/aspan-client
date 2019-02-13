import React, { useState } from 'react'
import './App.css'
import { Browser } from './components/Browser'
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
  console.log(`currentFolder: ${currentFolder}`)

  return (
    <Query query={getQuery(currentFolder)}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...'
        if (error) return `Error! ${error.message}`

        console.log(JSON.stringify(data.getFolderEntries, null, 2))

        return (
          <Browser
            entries={data.getFolderEntries}
            onFolderClick={folder => setCurrentFolder(folder)}
          />
        )
      }}
    </Query>
  )
}
