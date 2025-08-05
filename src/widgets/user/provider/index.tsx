"use server"

import { ClientSideUserProvider } from "./client-side"
import { getUser } from "@/features/user/api/get-user"

const UserProvider = async ({ children }: { children: React.ReactNode }) => {
  const user = await getUser().catch(() => null)
  return (
    <>
      <ClientSideUserProvider user={user} />
      {children}
    </>
  )
}

export { UserProvider }
