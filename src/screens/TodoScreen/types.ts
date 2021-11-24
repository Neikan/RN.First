import { ITodo } from 'components/Todo/types'

export interface ITodoScreenProps {
  todo: ITodo
  onGoBack: () => void
  onEditTodo: (id: string, title: string) => void
  onRemoveTodo: (id: string) => void
}
