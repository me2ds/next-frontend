"use client"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/shared/ui/collapsible"
import {
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubButton,
} from "@/shared/ui/sidebar"
import { ChevronRight, ListMusic, Trash2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { CreateNewPlaylist } from "@/features/music/ui/new-playlist"
import { PlaylistStore, Playlist } from "@/entities/music/playlist/model"
import { deletePlaylist } from "@/features/music/api/delete-playlist"
import { routes } from "@/shared/config/routes"

const PlaylistsPanel = () => {
  const { playlists } = PlaylistStore()
  const router = useRouter()

  const handleDelete = async (playlistId: string) => {
    const success = await deletePlaylist(playlistId)
    if (success) {
      PlaylistStore.getState().deletePlaylist(playlistId)
    }
  }

  return (
    <Collapsible asChild className="group/collapsible">
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            <ListMusic />
            <span>Playlists</span>
            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            <CreateNewPlaylist />
            {playlists.map((playlist: Playlist) => (
              <SidebarMenuSubButton key={playlist.id}>
                <span
                  onClick={() =>
                    router.push(routes.music.playlist.id(playlist.id))
                  }
                >
                  {playlist.name}
                </span>
                <Trash2
                  className="ml-auto cursor-pointer"
                  onClick={() => handleDelete(playlist.id)}
                />
              </SidebarMenuSubButton>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  )
}

export { PlaylistsPanel }
