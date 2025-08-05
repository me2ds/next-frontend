import { create } from "zustand"
import { Composition } from "@/entities/music/composition/model"

type Playlist = {
  id: string
  name: string
  ownerId: string
  compositions: Composition[]
}

type PlaylistState = {
  playlists: Playlist[]
  addPlaylist: (playlist: Playlist) => void
  setPlaylists: (playlists: Playlist[]) => void
  deletePlaylist: (playlistId: string) => void
}

const initialState = {
  playlists: [],
}

const PlaylistStore = create<PlaylistState>()((set) => ({
  ...initialState,
  addPlaylist: (playlist) => {
    set((state) => ({ playlists: [...state.playlists, playlist] }))
  },
  setPlaylists: (playlists) => {
    set({ playlists })
  },
  deletePlaylist: (playlistId) => {
    set((state) => ({
      playlists: state.playlists.filter((playlist) => playlist.id !== playlistId),
    }))
  },
}))

export { PlaylistStore, type Playlist }
