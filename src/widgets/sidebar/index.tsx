"use client"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarRail,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/shared/ui/sidebar"
import { SidebarPanel } from "@/features/user/ui/sidebar-panel"
import { UserStore } from "@/entities/user/model"
import { AuthPanel } from "@/features/user/ui/auth"
import { PlaylistsPanel } from "./playlists-panel"
import { AudioWaveform } from "lucide-react"
import Link from "next/link"
import { AuthGuard } from "@/entities/user/ui/auth-guard"


const AppSidebar = () => {

  const { user } = UserStore()
  
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <AuthGuard>
            <SidebarGroupLabel>Music</SidebarGroupLabel>
            <SidebarMenu>
              <PlaylistsPanel />
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/wave">
                    <AudioWaveform />
                    <span>Wave</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
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