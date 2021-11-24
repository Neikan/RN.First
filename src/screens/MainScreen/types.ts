import { ITodo } from 'components/Todo/types'

export interface IMainScreenProps {
  todos: ITodo[]
  onAddTodo: (title: string) => void
  onOpenTodo: (id: string) => void
  onRemoveTodo: (id: string) => void
}
