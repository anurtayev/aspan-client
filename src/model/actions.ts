import { createAsyncAction, createAction } from 'typesafe-actions'
import { IEntry, TSearchPattern } from '.'

export const repositoryPathChange = createAction(
  'aspan-client/SEARCH_PATTERN_CHANGE',
  resolve => {
    return (path: string) => resolve(path)
  }
)

export const repositoryPathClear = createAction(
  'aspan-client/SEARCH_PATTERN_CLEAR'
)

export const fetchEntries = createAsyncAction(
  'aspan-client/ENTRIES_REQUEST',
  'aspan-client/ENTRIES_SUCCESS',
  'aspan-client/ENTRIES_FAILURE'
)<TSearchPattern, IEntry[], Error>()
