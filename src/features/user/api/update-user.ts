"use server"

import { User } from "@/entities/user/model"
import { httpClient } from "@/shared/api/http-client"
import { handlers } from "@/shared/config/handlers"

const updateUser = async (newUser: User | null) => {
  if (!newUser) return null
  try {
    const { data } = await httpClient.patch<User>(
      handlers.patch.user.update,
      newUser
    )
    return data
  } catch (error) {
    throw error
  }
}

export { updateUser }
