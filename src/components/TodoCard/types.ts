import { ITodo } from '@/components/Todo/types'

export interface ITodoCardProps {
  onEdit: () => void
  todo: ITodo
}
