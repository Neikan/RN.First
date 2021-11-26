import React, { FC, useReducer } from 'react'

import { ScreenContext } from '@/context/screen/screenContext'
import { screenReducer } from '@/context/screen/screenReducer'

import { Nullable } from '@/types'
import { IScreenState as IState, IScreenStateProps as IProps, ScreenActionTypes } from './types'

export const ScreenState: FC<IProps> = ({ children }) => {
  const initialState: IState = {
    todoId: null
  }
  const [state, dispatch] = useReducer(screenReducer, initialState)

  const changeScreen = (id: Nullable<string>): void =>
    dispatch({
      type: ScreenActionTypes.CHANGE_SCREEN,
      payload: id
    })

  return (
    <ScreenContext.Provider
      value={{
        changeScreen,
        todoId: state.todoId
      }}
    >
      {children}
    </ScreenContext.Provider>
  )
}
