"use server"

import { httpClient } from "@/shared/api/http-client"
import { Playlist, playlistStore } from "@/entities/music/model"
import { handlers } from "@/shared/config/handlers"

const deletePlaylist = async (playlistId: string) => {
  try {
    await httpClient.delete(handlers.delete.playlist.id(playlistId))
    playlistStore().deletePlaylist(playlistId)
  } catch {}
}

export { deletePlaylist }