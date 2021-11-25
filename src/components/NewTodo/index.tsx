import React, { FC, useState } from 'react'
import { Alert, Keyboard, StyleSheet, TextInput, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import { DefaultTheme } from '@/consts/theme'

import { AppButton } from '@/components/AppButton'

import { INewTodoProps as IProps } from './types'

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
  },
  input: {
    width: '60%',
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
      Keyboard.dismiss()
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
      <AppButton
        onPress={handlePress}
        backgroundColor={DefaultTheme.BRAND_500}
        leftIcon={<AntDesign name='pluscircleo' size={24} color={DefaultTheme.LIGHT} />}
      >
        Добавить
      </AppButton>
    </View>
  )
}
