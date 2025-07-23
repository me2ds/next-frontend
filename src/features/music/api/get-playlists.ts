"use server"

import { httpClient } from "@/shared/api/http-client"
import { Playlist } from "@/entities/music/playlist/model"
import { handlers } from "@/shared/config/handlers"

const getPlaylists = async () => {
  try {
    const { data } = await httpClient.get<Playlist[]>(handlers.get.playlist.all)
    return data
  } catch {}
  return []
}

export { getPlaylists }
