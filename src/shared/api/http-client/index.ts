import axios from "axios"
import { cookies } from "next/headers"
import { setupCache } from "axios-cache-interceptor"

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
})

const httpClient = setupCache(api)

httpClient.interceptors.request.use(async (config) => {
  const cookieStore = await cookies()
  config.headers.Authorization = `Bearer ${cookieStore.get("authToken")?.value}`
  console.log(config.url)
  return config
})
httpClient.interceptors.response.use(
  (config) => config,
  (error: unknown) => {
    if (!axios.isAxiosError(error)) return Promise.reject(error)
    const message =
      (error.response?.data as { message?: string } | undefined)?.message ??
      error.message
    return Promise.reject(new Error(message))
  }
)
export { httpClient }

// import { cookies } from "next/headers"
//
// const API_URL = process.env.NEXT_PUBLIC_API_URL
//
// type RequestOptions = {
//   headers?: Record<string, string>
//   cache?: RequestCache
// }
// async function getAuthToken(): Promise<string | null> {
//   const cookieStore = await cookies()
//   return cookieStore.get('authToken')?.value ?? null
// }
//
// class HttpClient {
//   private baseURL: string
//
//   constructor(baseURL?: string) {
//     this.baseURL = baseURL ?? API_URL!
//   }
//
//
//
//   private async request<T>(endpoint: string, options: RequestInit = {}): Promise<{ data: T }> {
//     const token = await getAuthToken()
//     const headers: Record<string, string> = {
//       'Content-Type': 'application/json',
//       ...options.headers as Record<string, string>,
//     }
//
//     if (token) {
//       headers.Authorization = `Bearer ${token}`
//     }
//
//     const response = await fetch(this.baseURL + endpoint, {
//       ...options,
//       headers,
//       credentials: 'include',
//     })
//
//     if (!response.ok) {
//       const error = await response.json().catch(() => ({ message: response.statusText }))
//       throw new Error(error.message || response.statusText)
//     }
//
//     const data = await response.json()
//     return { data }
//   }
//
//   async get<T>(endpoint: string, options?: RequestOptions) {
//     return this.request<T>(endpoint, { method: 'GET', ...options })
//   }
//
//   async post<T>(endpoint: string, body?: any, options?: RequestOptions) {
//     return this.request<T>(endpoint, {
//       method: 'POST',
//       body: body ? JSON.stringify(body) : undefined,
//       ...options,
//     })
//   }
//
//   async put<T>(endpoint: string, body?: any, options?: RequestOptions) {
//     return this.request<T>(endpoint, {
//       method: 'PUT',
//       body: body ? JSON.stringify(body) : undefined,
//       ...options,
//     })
//   }
//
//   async patch<T>(endpoint: string, body?: any, options?: RequestOptions) {
//     return this.request<T>(endpoint, {
//       method: 'PATCH',
//       body: body ? JSON.stringify(body) : undefined,
//       ...options,
//     })
//   }
//
//   async delete<T>(endpoint: string, options?: RequestOptions) {
//     return this.request<T>(endpoint, { method: 'DELETE', ...options })
//   }
// }
//
// const httpClient = new HttpClient()
//
// export { httpClient, HttpClient }

