import { create } from "zustand"
import { BACKEND_API } from "@/shared/api/http-client"
import cookie from "js-cookie"

type User = {
	id: number,
	name: string
  login: string, 
  email: string,
  avatar_url: string
}

type UserState = {
  user: User | null,
  setUser: (value: User) => void,
  getUser: (token: string | null) => void,
  logout: () => void,
}

const initialStore = {
	user: null
}

const UserStore = create<UserState>()((set) => ({
	...initialStore,
	setUser: (value) => set(() => ({ user: value })),
	getUser: async (token) => {
		if (!token) return
		const response = await fetch(`${BACKEND_API}/profile/token/${token}`, { keepalive: true })
		if (!response.ok) return
		const { user } = await response.json() as { user: User }
		set({ user })
	},
	logout: async () => {
		cookie.remove("token")
		set(initialStore)
	}
}))

export { 
  type User,
  UserStore
}