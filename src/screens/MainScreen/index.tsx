import React, { FC, useEffect, useState } from 'react'
import { Dimensions, FlatList, StyleSheet, View } from 'react-native'

import { Spacing } from '@/consts/theme'

import { EmptyList } from '@/components/EmptyList'
import { NewTodo } from '@/components/NewTodo'
import { Todo } from '@/components/Todo'

import { IMainScreenProps as IProps } from './types'

const styles = StyleSheet.create({
  screen: {}
})

export const MainScreen: FC<IProps> = ({ onAddTodo, onOpenTodo, onRemoveTodo, todos }) => {
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
      <NewTodo onSubmit={onAddTodo} />
      {todos.length ? (
        <View style={{ width: deviceWidth }}>
          <FlatList
            scrollsToTop
            keyExtractor={(item) => item.id}
            data={todos}
            renderItem={({ item }) => <Todo key={item.id} onOpen={onOpenTodo} onRemove={onRemoveTodo} todo={item} />}
          />
        </View>
      ) : (
        <EmptyList />
      )}
    </View>
  )
}
