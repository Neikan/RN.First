import { Nullable } from '@/types'
import { IChangeScreenAction, IScreenState as IState, ScreenActionTypes } from './ScreenState/types'

const handlers = {
  [ScreenActionTypes.CHANGE_SCREEN]: (state: IState, payload: Nullable<string>) => ({
    ...state,
    todoId: payload
  }),

  DEFAULT: (state: IState) => state
}

export const screenReducer = (state: IState, { type, payload }: IChangeScreenAction): IState => {
  const handler = handlers[type] ?? handlers.DEFAULT

  return handler(state, payload)
}
