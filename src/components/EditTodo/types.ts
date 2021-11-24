export interface IEditTodoProps {
  isVisible: boolean
  todoTitle: string
  onCancel: () => void
  onSave: (title: string) => void
}
