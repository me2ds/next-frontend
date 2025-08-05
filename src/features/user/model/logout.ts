"use server"

import { httpClient } from "@/shared/api/http-client"
import { cookies } from "next/headers"

const logout = async () => {
  const cookieStore = await cookies()
  cookieStore.delete("authToken")
}

export { logout }