"use client"

import { UserStore } from "@/entities/user/model"


const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { user } = UserStore()
  if (user) return children
}

export { AuthGuard }