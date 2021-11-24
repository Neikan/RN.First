import React, { ReactElement, useState } from 'react'
import { StyleSheet, View } from 'react-native'

import { MainScreen, TodoScreen } from 'screens'

import { Nullable } from 'types'
import { ITodo } from 'components/Todo/types'
import { Header } from 'components/Header'

export default function App (): ReactElement {
  const [todoId, setTodoId] = useState<Nullable<string>>('2')
  const [todos, setTodos] = useState<ITodo[]>([
    { id: '1', title: 'Разработка' },
    { id: '2', title: 'Тестирование' }
  ])

  const addTodo = (title: string): void => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title
      }
    ])
  }

  const openTodo = (todoId: string): void => {
    setTodoId(todoId)
  }

  const removeTodo = (todoId: string): void => {
    setTodos((prev) => prev.filter((todo) => todo.id !== todoId))
  }

  const goBack = (): void => setTodoId(null)

  let content = <MainScreen onAddTodo={addTodo} onOpenTodo={openTodo} onRemoveTodo={removeTodo} todos={todos} />

  if (todoId) {
    const selectedTodo = todos.find((todo) => todo.id === todoId)

    if (selectedTodo) {
      content = <TodoScreen onGoBack={goBack} todo={selectedTodo} />
    }
  }

  return (
    <View>
      <Header title='Todo App' />

      <View style={styles.screen}>{content}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    height: 700,
    paddingHorizontal: 16,
    paddingVertical: 16
  }
})
