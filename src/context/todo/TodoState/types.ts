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

export interface ITodoContext {
  todos: ITodo[]
  addTodo: (title: string) => void
  removeTodo: (id: string) => void
  updateTodo: (id: string, title: string) => void
}
