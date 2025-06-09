import { create } from "zustand"


type Group = {
  id: string
  name: string,
  members: string[]
}

type GroupStore = {
  groups: Group[]
}
