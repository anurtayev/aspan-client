import { combineReducers, createStore, applyMiddleware } from 'redux'
import { combineEpics, createEpicMiddleware } from 'redux-observable'
import { AppState, DomainState, app, domain } from './reducers'
import { fetchTodosEpic } from './epics'
import { RootAction } from '.'
import { Services } from '../services/picRepo'

export type RootState = {
  app: AppState
  domain: DomainState
}

export const rootEpic = combineEpics(fetchTodosEpic)

export const rootReducer = combineReducers<RootState, RootAction>({
  app,
  domain
})

const epicMiddleware = createEpicMiddleware<
  RootAction,
  RootAction,
  RootState,
  Services
>()

export const store = createStore(rootReducer, applyMiddleware(epicMiddleware))

epicMiddleware.run(rootEpic)
