import { create } from "zustand"


type Group = {
  id: string
  name: string,
  members: string[]
}

type GroupState = {
  groups: Group[]
}

const initialStore = {
  groups: []
}

const GroupStore = create<GroupState>()(() => ({
  ...initialStore,
}))

export { type Group, GroupStore }
