"use client"

import { User, UserStore } from "@/entities/user/model"
import { AuthStore } from "@/entities/auth/model"
import { useEffect } from "react"

const ClientSideUserProvider = ({ user }: { user: User | null }) => {
  const { setUser } = UserStore()
  const { setShowAuth } = AuthStore()
  useEffect(() => {
    if (!user) {
      setShowAuth(true)
    }
    setUser(user)
  }, [user, setShowAuth, setUser])
  return null
}

export { ClientSideUserProvider }
