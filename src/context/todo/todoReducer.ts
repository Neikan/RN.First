import { ITodo } from '@/components/Todo/types'
import { ITodoState as IState, TodoActionTypes, TTodoActions } from './TodoState/types'

const handlers = {
  [TodoActionTypes.ADD_TODO]: (state: IState, title: string) => ({
    ...state,
    todos: [
      ...state.todos,
      {
        id: Date.now().toString(),
        title
      }
    ]
  }),

  [TodoActionTypes.REMOVE_TODO]: (state: IState, id: string) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id)
  }),

  [TodoActionTypes.UPDATE_TODO]: (state: IState, { id, title }: ITodo) => ({
    ...state,
    todos: state.todos.map((todo) => {
      if (todo.id === id) {
        todo.title = title
      }

      return todo
    })
  }),

  DEFAULT: (state: IState) => state
}

export const todoReducer = (state: IState, { type, payload }: TTodoActions): IState => {
  const handler = handlers[type] ?? handlers.DEFAULT

  // избавиться от any
  return handler(state, payload as any)
}
