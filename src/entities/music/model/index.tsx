// import { create } from "zustand"
// import { httpClient } from "@/shared/api/http-client"
// import { toast } from "sonner"

// type Playlist = {
//   id: string
//   name: string
//   ownerId: string
// }

// type PlaylistStore = {
//   playlists: Playlist[]
//   addPlaylist: (name: string) => void
//   getPlaylists: () => void
//   deletePlaylist: (playlistId: string) => void
// }

// const initialState = {
//   playlists: [],
// }

// const playlistStore = create<PlaylistStore>((set) => ({
//   ...initialState,
//   addPlaylist: async (name) => {
//     try {
//       const { data } = await httpClient.post<{ playlist: Playlist }>(
//         "/playlists",
//         { name }
//       )
//       set((state) => ({ playlists: [...state.playlists, data.playlist] }))
//       toast.success("Playlist created")
//     } catch {
//       toast.error("Failed to add playlist")
//     }
//   },
//   getPlaylists: async () => {
//     try {
//       const { data } = await httpClient.get<{ playlists: Playlist[] }>(
//         "/playlists"
//       )
//       set({ playlists: data.playlists })
//     } catch {
//       toast.error("Failed to get playlists")
//     }
//   },
//   deletePlaylist: async (playlistId) => {
//     try {
//       const { data } = await httpClient.delete<{ playlists: Playlist[] }>(
//         `/playlists/${playlistId}`
//       )
//       set({ playlists: data.playlists })
//       toast.success("Playlist deleted")
//     } catch {
//       toast.error("Failed to delete playlist")
//     }
//   },
// }))

// export { playlistStore, type Playlist }
