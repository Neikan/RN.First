import { ReactNode } from 'react'

import { ITodo } from '@/components/Todo/types'
import { Nullable } from '@/types'

export enum TodoActionTypes {
  ADD_TODO = 'ADD_TODO',
  REMOVE_TODO = 'REMOVE_TODO',
  UPDATE_TODO = 'UPDATE_TODO',
  FETCH_TODOS = 'FETCH_TODOS',
  SHOW_LOADER = 'SHOW_LOADER',
  HIDE_LOADER = 'HIDE_LOADER',
  SHOW_ERROR = 'SHOW_ERROR',
  CLEAR_ERROR = 'CLEAR_ERROR'
}

export interface ITodoStateProps {
  children: ReactNode
}

export interface ITodoState {
  todos: ITodo[]
  loading: boolean
  error: Nullable<string>
}

export interface ITodoContext extends ITodoState {
  addTodo: (title: string) => void
  removeTodo: (id: string) => void
  updateTodo: (id: string, title: string) => void
  fetchTodos: () => Promise<void>
}

export interface IAddTodoAction {
  type: TodoActionTypes.ADD_TODO
  payload: ITodo
}

export interface IRemoveTodoAction {
  type: TodoActionTypes.REMOVE_TODO
  payload: string
}

export interface IUpdateTodoAction {
  type: TodoActionTypes.UPDATE_TODO
  payload: ITodo
}

export interface IShowLoaderAction {
  type: TodoActionTypes.SHOW_LOADER
}

export interface IHideLoaderAction {
  type: TodoActionTypes.HIDE_LOADER
}

export interface IShowErrorAction {
  type: TodoActionTypes.SHOW_ERROR
  payload: string
}

export interface IClearErrorAction {
  type: TodoActionTypes.CLEAR_ERROR
}

export interface IFetchTodosAction {
  type: TodoActionTypes.FETCH_TODOS
  payload: ITodo[]
}

export type TTodoActions =
  | IAddTodoAction
  | IRemoveTodoAction
  | IUpdateTodoAction
  | IShowLoaderAction
  | IHideLoaderAction
  | IShowErrorAction
  | IClearErrorAction
  | IFetchTodosAction
