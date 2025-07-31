"use server"

import { httpClient } from "@/shared/api/http-client"
import { handlers } from "@/shared/config/handlers"

const deletePlaylist = async (playlistId: string) => {
  try {
    await httpClient.delete(handlers.delete.playlist.id(playlistId))
    return true
  } catch {}
  return false
}

export { deletePlaylist }