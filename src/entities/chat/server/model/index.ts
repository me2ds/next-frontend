import { create } from "zustand"


type Server = {
  id: string
  name: string
}

type ServerStore = {
  servers: Server[]
}