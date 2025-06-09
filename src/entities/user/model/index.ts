import { BACKEND_API } from "@/shared/api/http-client"
import cookie from "js-cookie"
import { create } from "zustand"

type User = {
  id: string
  authIds: string[]
	username: string
  avatar: string
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
		try {
			const response = await fetch(`${BACKEND_API}/profile`, { 
				keepalive: true,
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			const { user } = await response.json() as { user: User }
			set({ user })
		} catch {}
	},
	logout: async () => {
		cookie.remove("auth_token")
		set(initialStore)
	}
}))

export { 
  type User,
  UserStore
}