import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Color } from '../../consts/common'

import { ITodoProps as IProps } from './types'

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: Color.MAIN,
    borderRadius: 3,
    marginBottom: 16
  }
})

export const Todo: FC<IProps> = ({ todo }) => {
  return (
    <View style={styles.todo}>
      <Text>{todo.title}</Text>
    </View>
  )
}
