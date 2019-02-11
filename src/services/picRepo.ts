import gql from 'graphql-tag'
import { IEntry } from '../model'
import ApolloClient from 'apollo-boost'

type TEntriesPromise = () => Promise<IEntry[]>

export type Services = {
  entriesApi: {
    getRootFolderEntries: TEntriesPromise
  }
}

const getEntries: TEntriesPromise = () => {
  return Promise.resolve([])
}

const services: Services = { entriesApi: { getRootFolderEntries: getEntries } }

export default services
