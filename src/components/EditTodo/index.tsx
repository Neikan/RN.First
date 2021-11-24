import React, { FC, useState } from 'react'
import { Alert, Button, Modal, StyleSheet, TextInput, View } from 'react-native'

import { DefaultTheme } from '@/consts/theme'

import { IEditTodoProps as IProps } from './types'

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 16
  },
  input: {
    borderStyle: 'solid',
    borderBottomColor: DefaultTheme.BRAND_500,
    borderBottomWidth: 2,
    padding: 16
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 16,
  },
  button: {
    width: '40%'
  }
})

export const EditTodo: FC<IProps> = ({ isVisible, todoTitle, onCancel, onSave }) => {
  const [title, setTitle] = useState(todoTitle)

  const handlePress = (): void => {
    if (title.trim()) {
      onSave(title)
      setTitle('')
    } else {
      Alert.alert('Название задачи может быть пустым')
    }
  }

  return (
    <Modal
      visible={isVisible}
      animationType='slide'
    >
      <View style={styles.view}>
        <TextInput
          autoFocus
          onChangeText={setTitle}
          placeholder='Введите название задачи...'
          style={styles.input}
          value={title}
          selectionColor={DefaultTheme.BRAND_500}
          autoCorrect={false}
          autoCapitalize='none'
        />

        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button color={DefaultTheme.GRAY_500} title='Отменить' onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button color={DefaultTheme.BRAND_500} title='Сохранить' onPress={handlePress} />
          </View>
        </View>
      </View>
    </Modal>
  )
}
