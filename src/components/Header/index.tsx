import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { DefaultTheme } from '~/consts/theme'

import { IHeaderProps as IProps } from './types'

const styles = StyleSheet.create({
  view: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: DefaultTheme.BRAND_500,
    paddingBottom: 10
  },
  text: {
    color: DefaultTheme.LIGHT,
    fontSize: 20
  }
})

export const Header: FC<IProps> = ({ title }) => (
  <View style={styles.view}>
    <Text style={styles.text}>{title}</Text>
  </View>
)
