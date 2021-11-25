import React, { FC, useReducer } from 'react'

import { todoReducer } from '../todoReducer'
import { TodoContext } from '../todoContext'

import { ITodoState as IState, ITodoStateProps as IProps } from './types'
import { TodoActionTypes } from '@/screens/TodoScreen/types'

export const TodoState: FC<IProps> = ({ children }) => {
  const initialState: IState = {
    todos: [{ id: '1', title: 'Разработка' }]
  }

  const [state, dispatch] = useReducer(todoReducer, initialState)

  const addTodo = (title: string): void =>
    dispatch({
      type: TodoActionTypes.ADD_TODO,
      payload: title
    })

  const removeTodo = (id: string): void =>
    dispatch({
      type: TodoActionTypes.REMOVE_TODO,
      payload: id
    })

  const updateTodo = (id: string, title: string): void =>
    dispatch({
      type: TodoActionTypes.UPDATE_TODO,
      payload: {
        id,
        title
      }
    })

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        removeTodo,
        updateTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}
