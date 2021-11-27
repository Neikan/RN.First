import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { DefaultTheme } from '@/consts/theme'

import { IAppErrorProps as IProps } from './types'
import { AppButton } from '../AppButton'

export const styles = StyleSheet.create({
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: DefaultTheme.BRAND_500,
    fontWeight: 'bold',
    marginBottom: 16
  }
})

export const AppError: FC<IProps> = ({ error, onRefresh }) => (
  <View style={styles.loader}>
    <Text style={styles.text}>{error}</Text>
    <AppButton onPress={onRefresh}>Повторить</AppButton>
  </View>
)
