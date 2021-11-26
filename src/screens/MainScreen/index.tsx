import React, { FC, useContext, useEffect, useState } from 'react'
import { Dimensions, FlatList, StyleSheet, View } from 'react-native'

import { TodoContext } from '@/context/todo/todoContext'
import { ScreenContext } from '@/context/screen/screenContext'

import { Spacing } from '@/consts/theme'

import { EmptyList } from '@/components/EmptyList'
import { NewTodo } from '@/components/NewTodo'
import { Todo } from '@/components/Todo'

const styles = StyleSheet.create({
  screen: {}
})

export const MainScreen: FC = () => {
  const { todos, addTodo, removeTodo } = useContext(TodoContext)
  const { changeScreen } = useContext(ScreenContext)

  const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width - 2 * Spacing.PADDING_X)

  useEffect(() => {
    const update = (): void => {
      const width = Dimensions.get('window').width - 2 * Spacing.PADDING_X

      setDeviceWidth(width)
    }

    Dimensions.addEventListener('change', update)

    return () => {
      Dimensions.removeEventListener('change', update)
    }
  })

  return (
    <View style={styles.screen}>
      <NewTodo onSubmit={addTodo} />
      {todos.length ? (
        <View style={{ width: deviceWidth }}>
          <FlatList
            scrollsToTop
            keyExtractor={(item) => item.id}
            data={todos}
            renderItem={({ item }) => <Todo key={item.id} onOpen={changeScreen} onRemove={removeTodo} todo={item} />}
          />
        </View>
      ) : (
        <EmptyList />
      )}
    </View>
  )
}
