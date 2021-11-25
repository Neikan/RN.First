import { createContext } from 'react'

import { ITodoContext as IContext } from './TodoState/types'

export const TodoContext = createContext<IContext>({
  todos: [],
  addTodo: () => null,
  removeTodo: () => null,
  updateTodo: () => null
 })
