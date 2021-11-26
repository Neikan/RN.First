import React, { FC, useContext, useReducer } from 'react'

import { ScreenContext } from '@/context/screen/screenContext'
import { TodoContext } from '@/context/todo/todoContext'
import { todoReducer } from '@/context/todo/todoReducer'

import { ITodoState as IState, ITodoStateProps as IProps, TodoActionTypes } from './types'
import { Alert } from 'react-native'

export const TodoState: FC<IProps> = ({ children }) => {
  const { changeScreen } = useContext(ScreenContext)

  const initialState: IState = {
    todos: [{ id: '1', title: 'Разработка' }]
  }

  const [state, dispatch] = useReducer(todoReducer, initialState)

  const addTodo = (title: string): void =>
    dispatch({
      type: TodoActionTypes.ADD_TODO,
      payload: title
    })

  const removeTodo = (id: string): void => {
    const selectedTodo = state.todos.find((todo) => todo.id === id)

    selectedTodo && Alert.alert(
      'Удаление элемента',
      `Вы уверены, что хотите удалить ${selectedTodo.title}?`,
      [
        {
          text: 'Подтвердить',
          onPress: () => {
            changeScreen(null)
            dispatch({
              type: TodoActionTypes.REMOVE_TODO,
              payload: id
            })
          }
        },
        {
          text: 'Отмена',
          style: 'cancel'
        }
      ],
      { cancelable: true }
    )
  }

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
