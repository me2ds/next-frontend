"use client"

import { Playlist, PlaylistStore } from "@/entities/music/playlist/model"
import { useEffect } from "react"

const ClientSidePlaylistProvider = ({
  playlists,
}: {
  playlists: Playlist[]
}) => {
  const { setPlaylists } = PlaylistStore()

  useEffect(() => {
    setPlaylists(playlists)
  }, [playlists, setPlaylists])

  return null
}

export { ClientSidePlaylistProvider }
