import React, { ReactElement, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

import { AddTodo } from './src/common/AddTodo'
import { Navbar } from './src/common/Navbar'
import { Todo } from './src/common/Todo'

import { ITodo } from './src/common/Todo/types'

export default function App(): ReactElement {
  const [todos, setTodos] = useState<ITodo[]>([])

  const addTodo = (title: string): void => {
    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title
      }
    ])
  }

  return (
    <View style={styles.app}>
      <Navbar title='Todo App' />

      <View style={styles.todos}>
        <AddTodo onSubmit={addTodo} />
        <ScrollView>
          {todos.map(todo => <Todo key={todo.id} todo={todo} />)}
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  app: {},
  todos: {
    paddingHorizontal: 16,
    paddingVertical: 16
  },
})
