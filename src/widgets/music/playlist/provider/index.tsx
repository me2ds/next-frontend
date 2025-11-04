"use server"

import { getPlaylists } from "@/features/music/api/get-playlists"
import { ClientSidePlaylistProvider } from "./client-side"

const PlaylistProvider = async () => {
  const playlists = await getPlaylists()
  return <ClientSidePlaylistProvider playlists={playlists} />
}

export { PlaylistProvider }
