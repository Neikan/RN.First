import React, { FC, useContext, useReducer } from 'react'
import { Alert } from 'react-native'

import { ScreenContext } from '@/context/screen/screenContext'
import { TodoContext } from '@/context/todo/todoContext'
import { todoReducer } from '@/context/todo/todoReducer'

import { API, Method } from '@/consts/common'

import { ITodoState as IState, ITodoStateProps as IProps, TodoActionTypes } from './types'

export const TodoState: FC<IProps> = ({ children }) => {
  const { changeScreen } = useContext(ScreenContext)

  const initialState: IState = {
    todos: [],
    loading: false,
    error: null
  }

  const [state, dispatch] = useReducer(todoReducer, initialState)

  const addTodo = async (title: string): Promise<void> => {
    const response = await fetch(API + 'todos.json', {
      method: Method.POST,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title })
    })

    const { name } = await response.json()

    dispatch({
      type: TodoActionTypes.ADD_TODO,
      payload: {
        id: name,
        title
      }
    })
  }

  const removeTodo = (id: string): void => {
    const selectedTodo = state.todos.find((todo) => todo.id === id)

    selectedTodo &&
      Alert.alert(
        'Удаление элемента',
        `Вы уверены, что хотите удалить ${selectedTodo.title}?`,
        [
          {
            text: 'Подтвердить',
            onPress: async () => {
              changeScreen(null)

              await fetch(API + `todos/${id}.json`, {
                method: Method.DELETE,
                headers: { 'Content-Type': 'application/json' }
              })

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

  const updateTodo = async (id: string, title: string): Promise<void> => {
    clearError()

    try {
      await fetch(API + `todos/${id}.json`, {
        method: Method.PATCH,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title })
      })

      dispatch({
        type: TodoActionTypes.UPDATE_TODO,
        payload: {
          id,
          title
        }
      })
    } catch (error) {
      showError('Ошибка обновления данных...')
    }
  }

  const showLoader = (): void => dispatch({ type: TodoActionTypes.SHOW_LOADER })
  const hideLoader = (): void => dispatch({ type: TodoActionTypes.HIDE_LOADER })
  const showError = (error: string): void => dispatch({ type: TodoActionTypes.SHOW_ERROR, payload: error })
  const clearError = (): void => dispatch({ type: TodoActionTypes.CLEAR_ERROR })

  const fetchTodos = async (): Promise<any> => {
    showLoader()
    clearError()

    try {
      const response = await fetch(API + 'todos.json', {
        method: Method.GET,
        headers: { 'Content-Type': 'application/json' }
      })

      const data = await response.json()

      const todos = Object.keys(data).map((key) => ({ ...data[key], id: key }))

      dispatch({ type: TodoActionTypes.FETCH_TODOS, payload: todos })
    } catch (error) {
      showError('Что-то пошло не так...')
    } finally {
      hideLoader()
    }
  }

  return (
    <TodoContext.Provider
      value={{
        ...state,
        addTodo,
        fetchTodos,
        removeTodo,
        updateTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}
