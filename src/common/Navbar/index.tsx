import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Color } from '../../consts/common'

import { INavbarProps as IProps } from './types'

const styles = StyleSheet.create({
  view: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: Color.MAIN,
    paddingBottom: 10
  },
  text: {
    color: '#fff',
    fontSize: 20
  }
})

export const Navbar: FC<IProps> = ({ title }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}
