import React, { FC, useState } from 'react'
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native'

import { Color } from '../../consts/common'

import { IAddTodoProps as IProps } from './types'

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
  },
  input: {
    width: '70%',
    borderStyle: 'solid',
    borderBottomColor: Color.MAIN,
    borderBottomWidth: 2,
    padding: 10
  }
})

export const AddTodo: FC<IProps> = ({ onSubmit }) => {
  const [value, setValue] = useState('')

  const handlePress = (): void => {
    if (value.trim()) {
      onSubmit(value)
      setValue('')
    } else {
      Alert.alert('Название задачи может быть пустым')
    }
  }

  return (
    <View style={styles.view}>
      <TextInput
        onChangeText={setValue}
        placeholder='Введите название задачи...'
        style={styles.input}
        value={value}
        selectionColor={Color.MAIN}
      />
      <Button color={Color.MAIN} title='Добавить' onPress={handlePress} />
    </View>
  )
}
