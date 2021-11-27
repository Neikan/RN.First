import { Nullable } from '@/types'
import { ReactNode } from 'react'

export enum ScreenActionTypes {
  CHANGE_SCREEN = 'CHANGE_SCREEN'
}

export interface IScreenStateProps {
  children: ReactNode
}

export interface IScreenState {
  todoId: Nullable<string>
}

export interface IScreenContext extends IScreenState {
  changeScreen: (id: Nullable<string>) => void
}

export interface IChangeScreenAction {
  type: ScreenActionTypes
  payload: Nullable<string>
}

export type TScreenActions = IChangeScreenAction
