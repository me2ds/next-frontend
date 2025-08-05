"use client"

import { UsernameBadge } from "@/entities/user/ui/username-badge"
import { BannerFallback } from "../banner"
import dynamic from "next/dynamic"
import { Suspense } from "react"
import { AvatarPickerFallback } from "../avatar-picker"

const UserBanner = dynamic(() =>
  import("../banner").then(({ UserBanner }) => UserBanner)
)
const AvatarPicker = dynamic(() =>
  import("../avatar-picker").then(({ AvatarPicker }) => AvatarPicker)
)

const AccountInfo = () => {
  return (
    <div className={"flex flex-col"}>
      <Suspense fallback={<BannerFallback />}>
        <UserBanner />
      </Suspense>
      <div className={"flex p-3"}>
        <Suspense fallback={<AvatarPickerFallback />}>
          <AvatarPicker />
        </Suspense>
        <UsernameBadge />
      </div>
    </div>
  )
}

export { AccountInfo }
