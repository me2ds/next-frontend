const handlers = {
  get: {
    user: {
      root: "/user",
      profile: "/user/profile",
    },
    playlist: {
      all: "/playlists",
    }
  },
  post: {
    user: {
      root: "/user",
      auth: {
        root: "/auth",
        company: (company: string) => `/user/auth/${company}`,
      },
    },
    playlist: {
      all: "/playlists",
    },
  },
  delete: {
    playlist: {
      id: (id: string) => `/playlist/${id}`,
    }
  }
}
export { handlers }