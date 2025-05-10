
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail
} from "@/shared/ui/sidebar"
import { SidebarPanel } from "@/features/user/ui/sidebar-panel"
import { type User } from "@/entities/user/model"
import { AuthPanel } from "@/features/user/ui/auth"


const AppSidebar = () => {

  const user = null
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        
      </SidebarHeader>
      <SidebarContent>
        
      </SidebarContent>
      <SidebarFooter>
        { user && <SidebarPanel user={user} /> }
        { !user && <AuthPanel /> }
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

export { AppSidebar }