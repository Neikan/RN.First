import React, { ReactElement } from 'react'

import { TodoState } from '@/context/todo/TodoState'
import { ScreenState } from '@/context/screen/ScreenState'

import { MainLayout } from './src/MainLayout'

export default function App (): ReactElement {
  return (
    <ScreenState>
      <TodoState>
        <MainLayout />
      </TodoState>
    </ScreenState>
  )
}
