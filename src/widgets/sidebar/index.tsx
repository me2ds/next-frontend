
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail
} from "@/shared/ui/sidebar"
import { SidebarPanel } from "@/features/user/ui/sidebar-panel"
import { type User } from "@/entities/user/model"


const AppSidebar = () => {

  const user = {name: "test", email: "test@mail.ru"} as User

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        
      </SidebarHeader>
      <SidebarContent>
        
      </SidebarContent>
      <SidebarFooter>
        <SidebarPanel user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

export { AppSidebar }