import React, { FC } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

import { DefaultTheme } from '@/consts/theme'

import { IHeaderProps as IProps } from './types'

const styles = StyleSheet.create({
  view: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10
  },
  viewAndroid: {
    backgroundColor: DefaultTheme.BRAND_500
  },
  viewIOS: {
    borderBottomColor: DefaultTheme.BRAND_500,
    borderBottomWidth: 1
  },
  text: {
    color: Platform.OS === 'ios' ? DefaultTheme.BRAND_500 : DefaultTheme.LIGHT,
    fontSize: 20
  }
})

export const Header: FC<IProps> = ({ title }) => (
  <View
    style={{
      ...styles.view,
      ...Platform.select({
        ios: { ...styles.viewIOS },
        android: { ...styles.viewAndroid }
      })
    }}
  >
    <Text style={styles.text}>{title}</Text>
  </View>
)
