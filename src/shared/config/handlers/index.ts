const handlers = {
  get: {
    user: {
      me: "/user/me",
      id: (id: string) => `/user/${id}`,
    },
    playlist: {
      all: "/playlist",
      id: (id: string) => `/playlist/${id}`,
      ownerId: (ownerId: string) => `/playlist/owner/${ownerId}`,
    },
    composition: {
      all: "/composition",
      id: (id: string) => `/composition/${id}`,
      ownerId: (ownerId: string) => `/composition/owner/${ownerId}`,
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
