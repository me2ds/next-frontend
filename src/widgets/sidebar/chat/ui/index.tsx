import {
  SidebarGroupLabel,
  SidebarMenu,
} from "@/shared/ui/sidebar"
import { GroupPanel } from "./group-panel"
import { ServerPanel } from "./server-panel"

const ChatPanel = () => {
  return (
    <>
      <SidebarGroupLabel>Chats</SidebarGroupLabel>
      <SidebarMenu>
        <GroupPanel />
        <ServerPanel />
      </SidebarMenu>
    </>
  )
}

export { ChatPanel }
