import { create } from "zustand"

type Playlist = {
  id: string
  name: string
  ownerId: string
}

type PlaylistStore = {
  playlists: Playlist[]
  addPlaylist: (playlist: Playlist) => void
  setPlaylists: (playlists: Playlist[]) => void
  deletePlaylist: (playlistId: string) => void
}

const initialState = {
  playlists: [],
}

const playlistStore = create<PlaylistStore>((set) => ({
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

export { playlistStore, type Playlist }
