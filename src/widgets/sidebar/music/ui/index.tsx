"use client"
import {
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/shared/ui/sidebar"
import { AudioWaveform, Shuffle } from "lucide-react"
import { PlaylistsPanel } from "./playlists-panel"
import Link from "next/link"

const MusicPanel = () => {
  return (
    <>
      <SidebarGroupLabel>Music</SidebarGroupLabel>
      <SidebarMenu>
        <PlaylistsPanel />
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <Link href="/music/wave">
              <AudioWaveform />
              <span>Wave</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <Link href="/music/random">
              <Shuffle />
              <span>Random</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </>
  )
}

export { MusicPanel }
