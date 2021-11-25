import { ReactNode } from 'react'

import { ITodo } from '@/components/Todo/types'

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
