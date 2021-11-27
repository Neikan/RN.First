import {
  IAddTodoAction,
  IClearErrorAction,
  IFetchTodosAction,
  IHideLoaderAction,
  IRemoveTodoAction,
  IShowErrorAction,
  IShowLoaderAction,
  ITodoState as IState,
  IUpdateTodoAction,
  TodoActionTypes,
  TTodoActions
} from './TodoState/types'

const handlers = {
  [TodoActionTypes.ADD_TODO]: (state: IState, { payload }: IAddTodoAction) => ({
    ...state,
    todos: [
      ...state.todos,
      {
        id: payload.title,
        title: payload.title
      }
    ]
  }),

  [TodoActionTypes.REMOVE_TODO]: (state: IState, { payload }: IRemoveTodoAction) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== payload)
  }),

  [TodoActionTypes.UPDATE_TODO]: (state: IState, { payload }: IUpdateTodoAction) => ({
    ...state,
    todos: state.todos.map((todo) => {
      if (todo.id === payload.id) {
        todo.title = payload.title
      }

      return todo
    })
  }),

  [TodoActionTypes.SHOW_LOADER]: (state: IState, action: IShowLoaderAction) => ({ ...state, loading: true }),

  [TodoActionTypes.HIDE_LOADER]: (state: IState, action: IHideLoaderAction) => ({ ...state, loading: false }),

  [TodoActionTypes.SHOW_ERROR]: (state: IState, { payload }: IShowErrorAction) => ({ ...state, error: payload }),

  [TodoActionTypes.CLEAR_ERROR]: (state: IState, action: IClearErrorAction) => ({ ...state, error: null }),

  [TodoActionTypes.FETCH_TODOS]: (state: IState, { payload }: IFetchTodosAction) => ({ ...state, todos: payload }),

  DEFAULT: (state: IState) => state
}

export const todoReducer = (state: IState, action: TTodoActions): IState => {
  const handler = handlers[action.type] ?? handlers.DEFAULT

  // избавиться от any
  return handler(state, action as any)
}
