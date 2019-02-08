import {
  createAsyncAction,
  isActionOf,
  ActionType,
  getType
} from 'typesafe-actions'
import { map, filter, switchMap, catchError } from 'rxjs/operators'
import { Epic } from 'redux-observable'
import { IEntry } from '../entities'
import { pipe, from, of } from 'rxjs'
import { RootAction } from '..'
import { Services } from '../../services'
import { fetchEntries } from '../actions'
import { Reducer } from 'redux'

export type AppState = {
  readonly repositoryPath: string
  readonly isFetching: boolean
  readonly error?: Error
  readonly searchPattern: string
}

export const app: Reducer<AppState, RootAction> = (
  state = { repositoryPath: '/', isFetching: false, searchPattern: '' },
  action
): AppState => {
  switch (action.type) {
    case getType(fetchEntries.request):
      return { ...state, isFetching: true }
    case getType(fetchEntries.success):
      return { ...state, isFetching: false }
    case getType(fetchEntries.failure):
      return { ...state, isFetching: false, error: action.payload }
    default:
      return state
  }
}
