"use client"
import { SidebarMenuSubButton } from "@/shared/ui/sidebar"
import { Plus } from "lucide-react"


const CreateNewGroup = () => {
  return (
    <SidebarMenuSubButton>
      <Plus />
      <span>New Group</span>
    </SidebarMenuSubButton>
  )
}

export { CreateNewGroup }