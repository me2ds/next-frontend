import { BACKEND_API } from "@/shared/api/http-client"
import { Company } from "@/shared/model"
import cookie from "js-cookie"
import { create } from "zustand"

type User = {
	id?: number,
	name?: string
  login?: string, 
  email?: string,
  avatar_url?: string
}

type UserState = {
  user: User | null,
  setUser: (value: User) => void,
  getUser: (token: string | null, company: Company | null) => void,
  logout: () => void,
}

const initialStore = {
	user: null
}

const UserStore = create<UserState>()((set) => ({
	...initialStore,
	setUser: (value) => set(() => ({ user: value })),
	getUser: async (token, company) => {
		if (!token || !company) return
		const response = await fetch(`${BACKEND_API}/profile/${company}`, { 
			keepalive: true,
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
		if (!response.ok) return
		const { user } = await response.json() as { user: User }
		set({ user })
	},
	logout: async () => {
		cookie.remove("auth_token")
		cookie.remove("auth_company")
		set(initialStore)
	}
}))

export { 
  type User,
  UserStore
}