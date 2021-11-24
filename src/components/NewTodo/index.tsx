import React, { FC, useState } from 'react'
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native'

import { DefaultTheme } from '@/consts/theme'

import { INewTodoProps as IProps } from './types'

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
    borderBottomColor: DefaultTheme.BRAND_500,
    borderBottomWidth: 2,
    padding: 16
  }
})

export const NewTodo: FC<IProps> = ({ onSubmit }) => {
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
        selectionColor={DefaultTheme.BRAND_500}
        autoCorrect={false}
        autoCapitalize='none'
      />
      <Button color={DefaultTheme.BRAND_500} title='Добавить' onPress={handlePress} />
    </View>
  )
}
