import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/shared/ui/collapsible"
import { SidebarMenuButton, SidebarMenuItem, SidebarMenuSub } from "@/shared/ui/sidebar"
import { ChevronRight, Server } from "lucide-react"
import { CreateNewServer } from "@/features/chat/ui/new-server"


const ServerPanel = () => {
  return (
    <Collapsible asChild className="group/collapsible">
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            <Server />
            <span>Servers</span>
            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            <CreateNewServer />
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  )
}

export { ServerPanel }