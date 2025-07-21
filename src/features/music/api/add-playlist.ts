"use server"

import { httpClient } from "@/shared/api/http-client"
import { Playlist, playlistStore } from "@/entities/music/model"
import { handlers } from "@/shared/config/handlers"

const addPlaylist = async (name: string) => {
  try {
    const { data } = await httpClient.post<{ playlist: Playlist }>(
      handlers.post.playlist.all,
      { name }
    )
    playlistStore().addPlaylist(data.playlist)
  } catch {}
}

export { addPlaylist }
