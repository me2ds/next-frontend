"use client"
import { SidebarMenuSubButton } from "@/shared/ui/sidebar"
import { Plus } from "lucide-react"


const CreateNewServer = () => {
  return (
    <SidebarMenuSubButton>
      <Plus />
      <span>New Server</span>
    </SidebarMenuSubButton>
  )
}

export { CreateNewServer }