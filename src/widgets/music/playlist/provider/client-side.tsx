"use client"

import { Playlist, playlistStore } from "@/entities/music/playlist/model"
import { useEffect } from "react"

const ClientSidePlaylistProvider = ({
  playlists,
}: {
  playlists: Playlist[]
}) => {
  const { setPlaylists } = playlistStore()

  useEffect(() => {
    setPlaylists(playlists)
  }, [playlists, setPlaylists])

  return null
}

export { ClientSidePlaylistProvider }
