"use server"

import { getPlaylists } from "@/features/music/api/get-playlists"
import { ClientSidePlaylistProvider } from "./client-side"

const PlaylistProvider = async ({
  children,
}: {
  children: React.ReactNode
}) => {
  const playlists = await getPlaylists()
  return (
    <>
      <ClientSidePlaylistProvider playlists={playlists} />
      {children}
    </>
  )
}

export { PlaylistProvider }
