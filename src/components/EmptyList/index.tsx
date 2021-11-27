import React, { FC } from 'react'
import { Image, StyleSheet, View } from 'react-native'

export const EmptyList: FC = () => (
  <View style={styles.view}>
    <Image style={styles.image} source={require('../../../assets/empty-list-default.png')} />
  </View>
)

const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    height: 135
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  }
})
