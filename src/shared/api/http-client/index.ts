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


// "use server"
//
// import { cookies } from "next/headers"
//
// const API_URL = process.env.NEXT_PUBLIC_API_URL
//
// type RequestConfig = {
//   endpoint: string,
//   body?: any,
// }
//
// class HttpClient {
//   private baseURL: string
//   constructor(baseURL?: string) {
//     this.baseURL = baseURL ?? API_URL!
//   }
//
//   async get<T>({ endpoint, ...opts }: RequestConfig) {
//     return fetch(this.baseURL + endpoint, {
//       method: "GET",
//       ...opts,
//     }) as T
//   }
//
//   async post<T>(config: RequestConfig) { }
//
//   async put<T>(config: RequestConfig) { }
//
//   async delete<T>(config: RequestConfig) { }
//
//   async patch<T>(config: RequestConfig) { }
// }
