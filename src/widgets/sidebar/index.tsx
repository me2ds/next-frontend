"use client"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarRail,
} from "@/shared/ui/sidebar"
import dynamic from "next/dynamic"
import { Suspense } from "react"
import { AuthStore } from "@/entities/auth/model"
import { UserStore } from "@/entities/user/model"
import { Loader } from "@/shared/ui/loader"
import { AuthDialog } from "@/features/auth/ui/dialog"

const UserInfo = dynamic(() =>
  import("@/features/user/ui/info").then(({ UserInfo }) => UserInfo),
)
import { AuthGuard } from "@/features/auth/ui/guard"
import { MusicPanel } from "./music/ui"
import { ChatPanel } from "./chat/ui"


const AppSidebar = () => {

  const { showAuth } = AuthStore()
  const { user } = UserStore()
  

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <AuthGuard>
            <MusicPanel />
            <ChatPanel />
          </AuthGuard>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className={"flex justify-center items-center"}>
        {!showAuth && (
          <Suspense
            fallback={
              <div className={"mb-1 flex flex-col items-center justify-center"}>
                <Loader />
              </div>
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