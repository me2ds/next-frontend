"use client"
import { CreateNewGroup } from "@/features/chat/ui/new-group"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/shared/ui/collapsible"
import { SidebarMenuButton, SidebarMenuItem, SidebarMenuSub } from "@/shared/ui/sidebar"
import { ChevronRight, MessageCircle } from "lucide-react"

const GroupPanel = () => {
  return (
    <Collapsible asChild className="group/collapsible">
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            <MessageCircle />
            <span>Groups</span>
            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            <CreateNewGroup />
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  )
}

export { GroupPanel }
