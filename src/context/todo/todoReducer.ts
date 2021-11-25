import { ITodoState as IState, TodoActionTypes } from './TodoState/types'

export const todoReducer = (state: IState, action: any): IState => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now().toString(),
            title: action.payload
          }
        ]
      }

    case TodoActionTypes.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload)
      }

    case TodoActionTypes.UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            todo.title = action.payload.title
          }

          return todo
        })
      }

    default:
      return state
  }
}
