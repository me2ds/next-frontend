"use client"

import { User } from "@/entities/user/model"
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar"
import { cn } from "@/shared/lib/utils"

const UserAvatar = ({ user, className }: { user: User, className?: string }) => {
  const getFallback = () => {
    const [firstName, lastName] = user.username.split(" ")
    if (!lastName) return firstName[0]
    const fallback = `${firstName[0]}${lastName[0]}`
    return fallback
  }
  return (
    <Avatar className={cn(className, "bg-background")}>
      <AvatarFallback>{getFallback()}</AvatarFallback>
      <AvatarImage src={user.avatar ?? undefined} />
    </Avatar>
  )
}

export { UserAvatar }
