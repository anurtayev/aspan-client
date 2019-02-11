import { Epic } from 'redux-observable'
import { RootAction, RootState } from '.'
import { Services } from '../services/picRepo'
import { filter, switchMap, map, catchError } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { from, pipe, of } from 'rxjs'
import { fetchEntries } from './actions'

export const fetchTodosEpic: Epic<
  RootAction,
  RootAction,
  RootState,
  Services
> = (action$, store, { entriesApi }) =>
  action$.pipe(
    filter(isActionOf(fetchEntries.request)),
    switchMap(action =>
      from(entriesApi.getRootFolderEntries()).pipe(map(fetchEntries.success))
    )
  )
