import React, { FC } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import { NewTodo } from '@/components/NewTodo'
import { Todo } from '@/components/Todo'

import { IMainScreenProps as IProps } from './types'

const styles = StyleSheet.create({
  screen: {}
})

export const MainScreen: FC<IProps> = ({ onAddTodo, onOpenTodo, onRemoveTodo, todos }) => {
  return (
    <View style={styles.screen}>
      <NewTodo onSubmit={onAddTodo} />
      <FlatList
        scrollsToTop
        keyExtractor={(item) => item.id}
        data={todos}
        renderItem={({ item }) => <Todo key={item.id} onOpen={onOpenTodo} onRemove={onRemoveTodo} todo={item} />}
      />
    </View>
  )
}
