import { create } from "zustand"

type User = {
  id: string
  authIds: string[]
  username: string
  avatar: string | null
  banner: string | null
}

type UserState = {
  user: User | null
  snapshot: User | null
  setUser: (user: User | null) => void
  takeSnapshot: () => void
  reset: () => void
}

const initialStore = {
  user: null,
  snapshot: null,
}

const UserStore = create<UserState>()((set) => ({
  ...initialStore,
  setUser: (user) => {
    if (!user) return set(() => initialStore)
    set(() => ({ user }))
  },
  takeSnapshot: () => {
    set((state) => ({ snapshot: state.user }))
  },
  reset: async () => {
    set(initialStore)
  },
}))

export { type User, UserStore }
