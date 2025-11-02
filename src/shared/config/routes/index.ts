
const routes = {
  root: "/",
  account: "/account",
  about: "/about",
  faq: "/faq",
  privacy: "/privacy",
  terms: "/terms",
  github: "https://github.com/me2ds/next-frontend",
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