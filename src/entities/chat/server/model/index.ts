import { create } from "zustand"


type Server = {
  id: string
  name: string
}

type ServerState = {
  servers: Server[]
}

const initialStore = {
  servers: []
}

const ServerStore = create<ServerState>()(() => ({
  ...initialStore,
}))

export { type Server, ServerStore }
