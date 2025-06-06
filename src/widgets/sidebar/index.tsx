"use client"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarRail
} from "@/shared/ui/sidebar"
import { SidebarPanel } from "@/features/user/ui/sidebar-panel"
import { UserStore } from "@/entities/user/model"
import { AuthPanel } from "@/features/user/ui/auth"


const AppSidebar = () => {

  const { user } = UserStore()
  
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
        	<SidebarGroupLabel>Music</SidebarGroupLabel>
         	<SidebarMenu>
          
          </SidebarMenu>
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