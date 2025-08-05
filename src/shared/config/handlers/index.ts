const handlers = {
  get: {
    user: {
      me: "/user/me",
      id: (id: string) => `/user/${id}`,
    },
    playlist: {
      all: "/playlist",
      id: (id: string) => `/playlist/${id}`,
      my: "/playlist/my",
    },
    composition: {
      all: "/composition",
      id: (id: string) => `/composition/${id}`,
      my: "/composition/my",
    },
  },
  post: {
    user: {
      create: "/user",
      auth: {
        company: (company: string) => `/user/auth/${company}`,
      },
    },
    playlist: {
      create: "/playlist",
      addComposition: (id: string, compositionId: string) =>
        `/playlist/${id}/composition/${compositionId}`,
    },
    composition: {
      create: "/composition",
    },
  },
  patch: {
    user: {
      update: "/user",
    },
    playlist: {
      update: (id: string) => `/playlist/${id}`,
    },
    composition: {
      update: (id: string) => `/composition/${id}`,
    },
  },
  delete: {
    playlist: {
      id: (id: string) => `/playlist/${id}`,
      removeComposition: (id: string, compositionId: string) =>
        `/playlist/${id}/composition/${compositionId}`,
    },
    composition: {
      id: (id: string) => `/composition/${id}`,
    },
  },
};

export { handlers };
