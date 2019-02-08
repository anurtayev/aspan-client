import { createAction, getType, ActionType } from 'typesafe-actions'
import { RootState, RootAction, IEntry } from '..'
import { Reducer } from 'redux'
import { fetchEntries } from '../actions'

export type DomainState = {
  readonly entries: IEntry[]
}

export const domain: Reducer<DomainState, RootAction> = (
  state = { entries: [] },
  action
): DomainState => {
  switch (action.type) {
    case getType(fetchEntries.success):
      return { ...state, entries: action.payload }
    case getType(fetchEntries.request):
      return { ...state, entries: [] }
    case getType(fetchEntries.failure):
      return { ...state, entries: [] }
    default:
      return state
  }
}
