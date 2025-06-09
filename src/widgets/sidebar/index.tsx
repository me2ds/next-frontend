"use client"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarRail,
} from "@/shared/ui/sidebar"
import { SidebarPanel } from "@/features/user/ui/sidebar-panel"
import { UserStore } from "@/entities/user/model"
import { AuthPanel } from "@/features/user/ui/auth"
import { AuthGuard } from "@/entities/user/ui/auth-guard"
import { MusicPanel } from "./music/ui"
import { ChatPanel } from "./chat/ui"


const AppSidebar = () => {

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
      <SidebarFooter>
        { user && <SidebarPanel /> }
        { !user && <AuthPanel /> }
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

export { AppSidebar }