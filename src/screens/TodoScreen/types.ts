import { ITodo } from 'components/Todo/types'

export interface ITodoScreenProps {
  todo: ITodo
  onGoBack: () => void
}
