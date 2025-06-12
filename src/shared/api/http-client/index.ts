import axios from "axios"
import cookie from "js-cookie"

const BACKEND_API = "http://localhost:8000" as const

const httpClient = axios.create({
	baseURL: BACKEND_API,
	withCredentials: false,
})

httpClient.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${cookie.get("authToken")}`
	return config;
})

export { 
	httpClient,
	BACKEND_API
}