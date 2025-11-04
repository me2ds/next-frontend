"use server"

import { ClientSideUserProvider } from "./client-side"
import { getUser } from "@/features/user/api/get-user"

const UserProvider = async () => {
  const user = await getUser().catch(() => null)
  return <ClientSideUserProvider user={user} />
}

export { UserProvider }
