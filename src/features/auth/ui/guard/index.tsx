"use client"

import { UserStore } from "@/entities/user/model"

interface Props { 
  children: React.ReactNode
  showIfUser?: boolean
}

const AuthGuard = ({ children, showIfUser = true }: Props) => {
  const { user } = UserStore()
  if (showIfUser && user) return children
  if (!showIfUser && !user) return children
  return null
}

export { AuthGuard }
