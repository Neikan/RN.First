export interface ITodo {
  id: string
  title: string
}

export interface ITodoProps {
  todo: ITodo
  onOpen: (id: string) => void
  onRemove: (id: string) => void
}
