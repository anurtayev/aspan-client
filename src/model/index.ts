import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

export * from './entities'
export * from './store'
export type RootAction = ActionType<typeof actions>
