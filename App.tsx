import React, { ReactElement } from 'react'

import { TodoState } from '@/context/todo/TodoState'

import { MainLayout } from './src/MainLayout'

export default function App (): ReactElement {
  return (
    <TodoState>
      <MainLayout />
    </TodoState>
  )
}
