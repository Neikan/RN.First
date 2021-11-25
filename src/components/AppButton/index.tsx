import React, { FC } from 'react'
import { Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'
import { DefaultTheme } from '@/consts/theme'

import { IAppButtonProps as IProps } from './types'

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingVertical: 16,
    paddingHorizontal: 16
  },
  leftIcon: {
    paddingRight: 4
  },
  text: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export const AppButton: FC<IProps> = ({
  backgroundColor = DefaultTheme.BRAND_500,
  children,
  color = DefaultTheme.LIGHT,
  leftIcon,
  onPress
}) => {
  const button = (
    <View style={{ ...styles.button, backgroundColor }}>
      <View style={{ ...styles.leftIcon }}>{leftIcon}</View>
      <Text style={{ ...styles.text, color }}>{children}</Text>
    </View>
  )

  return Platform.OS === 'android' ? (
    <TouchableNativeFeedback onPress={onPress}>{button}</TouchableNativeFeedback>
  ) : (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      {button}
    </TouchableOpacity>
  )
}
