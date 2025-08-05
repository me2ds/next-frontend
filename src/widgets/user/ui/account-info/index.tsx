"use client"

import { UsernameBadge } from "@/entities/user/ui/username-badge"
import { AvatarPicker } from "../avatar-picker"
import { UserBanner } from "../banner"

const AccountInfo = () => {
  return (
    <div className={"flex flex-col"}>
      <UserBanner />
      <div className={"flex p-3"}>
        <AvatarPicker />
        <UsernameBadge />
      </div>
    </div>
  )
}

export { AccountInfo }
