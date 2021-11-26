import { ReactNode } from 'react'

import { ITodo } from '@/components/Todo/types'

export enum TodoActionTypes {
  ADD_TODO = 'ADD_TODO',
  REMOVE_TODO = 'REMOVE_TODO',
  UPDATE_TODO = 'UPDATE_TODO'
}

export interface ITodoStateProps {
  children: ReactNode
}

export interface ITodoState {
  todos: ITodo[]
}

export interface ITodoContext extends ITodoState {
  addTodo: (title: string) => void
  removeTodo: (id: string) => void
  updateTodo: (id: string, title: string) => void
}

export interface IAddTodoAction {
  type: TodoActionTypes
  payload: string
}

export interface IRemoveTodoAction {
  type: TodoActionTypes
  payload: string
}

export interface IUpdateTodoAction {
  type: TodoActionTypes
  payload: ITodo
}

export type TTodoActions = IAddTodoAction | IRemoveTodoAction | IUpdateTodoAction
