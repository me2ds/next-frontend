"use server"

import { AuthStore } from "@/entities/auth/model"
import { UserStore } from "@/entities/user/model"
import { cookies } from "next/headers"

const logout = async () => {
  const cookieStore = await cookies()
  cookieStore.delete("authToken")
  UserStore.getState().reset()
  AuthStore.getState().setShowAuth(true)
}

export { logout }