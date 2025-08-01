"use server"

import { httpClient } from "@/shared/api/http-client"
import { User } from "@/entities/user/model"
import { handlers } from "@/shared/config/handlers"

const getUser = async () => {
  try {
    const { data } = await httpClient.get<User>(
      handlers.get.user.me
    )
    return data
  } catch (error) {
    throw error
  }
}

export { getUser }
