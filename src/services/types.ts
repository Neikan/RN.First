import { Method } from '@/consts/common'

export interface IHttpConfig {
  method: Method
  headers: any
  body?: string
}
