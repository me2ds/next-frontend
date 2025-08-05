"use client"

import { PlaylistStore } from "@/entities/music/playlist/model"

const PlaylistsList = () => {
  const { playlists } = PlaylistStore()
  return (
    <>
      <div className={"mt-6 flex flex-col gap-2"}>
        <h3 className={"text-xl font-semibold mb-4"}>Плейлисты</h3>
        {playlists.length > 0 &&
          playlists.map((playlist) => (
            <div key={playlist.id} className={"p-4 border rounded-lg"}>
              <h4 className={"font-medium"}>{playlist.name}</h4>
              <p className={"text-sm text-muted-foreground mt-1"}>
                {playlist.compositions.length}
              </p>
            </div>
          ))}
        {playlists.length <= 0 && (
          <p className={"text-muted-foreground"}>У вас пока нет плейлистов</p>
        )}
      </div>
    </>
  )
}

export { PlaylistsList }
