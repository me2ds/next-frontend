"use server"

import { httpClient } from "@/shared/api/http-client"
import { Playlist, playlistStore } from "@/entities/music/model"
import { handlers } from "@/shared/config/handlers"

const getPlaylists = async () => {
  try {
    const { data } = await httpClient.get<{ playlists: Playlist[] }>(
      handlers.get.playlist.all
    )
    playlistStore().setPlaylists(data.playlists)
  } catch {}
}

export { getPlaylists }
