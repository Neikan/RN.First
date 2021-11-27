import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import { DefaultTheme } from '@/consts/theme'

import { AppButton } from '@/components/AppButton'

import { ITodoCardProps as IProps } from './types'

const styles = StyleSheet.create({
  todoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 3,
    marginBottom: 16,
    // Тень для iOS
    shadowColor: DefaultTheme.BRAND_500,
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: { width: 2, height: 2 },
    backgroundColor: DefaultTheme.LIGHT,
    // Тень для android
    elevation: 8
  }
})

export const TodoCard: FC<IProps> = ({ onEdit, todo }) => (
  <View style={styles.todoCard}>
    <Text>{todo.title}</Text>
    <AppButton onPress={onEdit} backgroundColor={DefaultTheme.BRAND_500}>
      <FontAwesome name='edit' size={24} />
    </AppButton>
  </View>
)
