import { Company } from "@/entities/company/model"
import { httpClient } from "@/shared/api/http-client"
import { handlers } from "@/shared/config/handlers"

const auth = async (code: string | null, company: Company) => {
  if (!code) return null
  try {
    const { data } = await httpClient.post<{ authToken: string }>(
      handlers.post.user.auth.company(company),
      { code }
    )
    return data.authToken
  } catch {
    return null
  }
}

export { auth }
