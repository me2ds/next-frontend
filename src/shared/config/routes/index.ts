
const routes = {
  root: "/",
  account: "/account",
  music: {
    root: "/music",
    wave: "/music/wave",
    random: "/music/random",
    playlist: {
      root: "/music/playlist",
      id: (id: string) => `/music/playlist/${id}`,
    },
  },
} as const

export { routes }