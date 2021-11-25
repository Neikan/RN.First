import { ReactNode } from 'react'

export interface IAppButtonProps {
  children: any
  backgroundColor?: string
  color?: string
  leftIcon?: ReactNode
  onPress: () => void
}
