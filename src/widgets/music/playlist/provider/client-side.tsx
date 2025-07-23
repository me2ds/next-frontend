"use client"

import { Playlist, playlistStore } from "@/entities/music/playlist/model"
import { useEffect, ReactNode } from "react"

const ClientSidePlaylistProvider = ({
  playlists,
  children,
}: {
  playlists: Playlist[]
  children: ReactNode
}) => {
  const { setPlaylists } = playlistStore()

  useEffect(() => {
    setPlaylists(playlists)
  }, [playlists, setPlaylists])

  return children
}

export { ClientSidePlaylistProvider }
