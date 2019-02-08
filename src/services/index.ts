import { IEntry } from '../model'

export type Services = {
  entriesApi: {
    getRootFolderEntries: typeof getEntries
  }
}

const getEntries = (): Promise<IEntry[]> => {
  return Promise.resolve([])
}

const services: Services = { entriesApi: { getRootFolderEntries: getEntries } }

export default services
