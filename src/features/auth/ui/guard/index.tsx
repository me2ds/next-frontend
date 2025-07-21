"use server"

import { UserStore } from "@/entities/user/model"


const AuthGuard = async ({ children }: { children: React.ReactNode }) => {
  const user = UserStore().user
  if (user) return children
}

export { AuthGuard }