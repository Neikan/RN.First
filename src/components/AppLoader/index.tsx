import { DefaultTheme } from '@/consts/theme'
import React, { FC } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

export const styles = StyleSheet.create({
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export const AppLoader: FC = () => (
  <View style={styles.loader}>
    <ActivityIndicator color={DefaultTheme.BRAND_500} size='large' />
  </View>
)
