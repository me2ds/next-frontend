"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/shared/ui/sidebar"
import dynamic from "next/dynamic"
import { Suspense } from "react"
import { AuthStore } from "@/entities/auth/model"
import { UserStore } from "@/entities/user/model"
import { Skeleton } from "@/shared/ui/skeleton"
import { AuthDialog } from "@/features/auth/ui/dialog"

const UserInfo = dynamic(() =>
  import("../user/ui/info").then(({ UserInfo }) => UserInfo)
)
import { AuthGuard } from "@/features/auth/ui/guard"
import { MusicPanel } from "../music/ui"
import { ChatPanel } from "../chat/ui"
import { TopLinks, BottomLinks } from "../useful-links/ui"
import { Separator } from "@/shared/ui/separator"

const AppSidebar = () => {
  const { showAuth } = AuthStore()
  const { user } = UserStore()
  const { state } = useSidebar()

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <TopLinks />
          <AuthGuard>
            <MusicPanel />
            <ChatPanel />
          </AuthGuard>
          <BottomLinks />
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className={"flex justify-center items-center p-2"}>
        {!showAuth && (
          <Suspense
            fallback={
              <Skeleton
                className={`transition-all duration-300 rounded-md ease-in-out ${
                  state === "collapsed"
                    ? "w-8 h-8"
                    : "w-full h-10"
                }`}
              />
            }
          >
            {user && <UserInfo />}
            {!user && <div className={"size-8"}></div>}
          </Suspense>
        )}
        {showAuth && <AuthDialog />}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

export { AppSidebar }
