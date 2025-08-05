"use server"

import { httpClient } from "@/shared/api/http-client"
import { Playlist } from "@/entities/music/playlist/model"
import { handlers } from "@/shared/config/handlers"

const addPlaylist = async (name: string) => {
  try {
    const { data } = await httpClient.post<Playlist>(
      handlers.post.playlist.create,
      { name }
    )
    return data
  } catch {}
  return null
}

export { addPlaylist }
