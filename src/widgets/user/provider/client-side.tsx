"use client"

import { User, UserStore } from "@/entities/user/model"
import { AuthStore } from "@/entities/auth/model"
import { ReactNode, useEffect } from "react"

const ClientSideUserProvider = ({
  user,
  children,
}: {
  user: User | null
  children: ReactNode
}) => {
  const { setUser } = UserStore()
  const { setShowAuth } = AuthStore()
  useEffect(() => {
    if (!user) {
      setShowAuth(true)
    }
    setUser(user)
  }, [user, setShowAuth, setUser])
  return children
}

export { ClientSideUserProvider }
