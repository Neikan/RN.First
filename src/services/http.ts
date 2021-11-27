import { Method } from '@/consts/common'

import { IHttpConfig } from './types'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class Http {
  static HEADERS = { 'Content-Type': 'application/json' }

  static async get (url: string): Promise<any> {
    try {
      return await this.request(url)
    } catch (error: any) {
      throw new Error(error)
    }
  }

  static async post (url: string, data = {}): Promise<any> {
    try {
      return await this.request(url, Method.POST, data)
    } catch (error: any) {
      throw new Error(error)
    }
  }

  static async delete (url: string): Promise<any> {
    try {
      return await this.request(url, Method.DELETE)
    } catch (error: any) {
      throw new Error(error)
    }
  }

  static async patch (url: string, data = {}): Promise<any> {
    try {
      return await this.request(url, Method.PATCH, data)
    } catch (error: any) {
      throw new Error(error)
    }
  }

  static async request (url: string, method: Method = Method.GET, data?: any): Promise<any> {
    const config: IHttpConfig = {
      method,
      headers: Http.HEADERS
    }

    if (method === Method.POST || method === Method.PATCH) {
      config.body = JSON.stringify(data)
    }

    const response = await fetch(url, config)

    return response.json() as any
  }
}
