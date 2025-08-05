import axios from "axios"
import { cookies } from "next/headers"
import { setupCache } from "axios-cache-interceptor"
 
const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
})

// const httpClient = setupCache(api)

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
