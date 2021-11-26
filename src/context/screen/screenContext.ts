import { createContext } from 'react'

import { IScreenContext as IContext } from './ScreenState/types'

export const ScreenContext = createContext<IContext>({
  changeScreen: () => null,
  todoId: null
})
