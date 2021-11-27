import React, { FC, useContext, useReducer } from 'react'
import { Alert } from 'react-native'

import { Http } from '@/services/http'

import { API } from '@/consts/common'

import { ScreenContext } from '@/context/screen/screenContext'
import { TodoContext } from '@/context/todo/todoContext'
import { todoReducer } from '@/context/todo/todoReducer'

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
    clearError()

    try {
      const data = await Http.post(API + 'todos.json', { title })

      dispatch({
        type: TodoActionTypes.ADD_TODO,
        payload: {
          id: data.name,
          title
        }
      })
    } catch (error) {
      showError('Ошибка отправки данных...')
    }
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

              try {
                await Http.delete(API + `todos/${id}.json`)

                dispatch({
                  type: TodoActionTypes.REMOVE_TODO,
                  payload: id
                })
              } catch (error) {
                showError('Ошибка удаления. Попробуйте позднее...')
              }
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
      await Http.patch(API + `todos/${id}.json`, { title })

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
      const data = await Http.get(API + 'todos.json')

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
