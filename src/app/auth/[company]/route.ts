import { cookies } from "next/headers"
import { auth } from "@/features/auth/api"
import { routes } from "@/shared/config/routes"
import type { Company } from "@/entities/company/model"
import { redirect } from "next/navigation"
import { NextRequest } from "next/server"

const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ company: string }> },
) => {
  const { company } = await params
  const companyParam = company as Company
  const code = new URL(request.url).searchParams.get("code") as string | null
  const cookieStore = await cookies()
  const redirectTo = cookieStore.get("redirectTo")?.value ?? routes.root
  cookieStore.delete("redirectTo")
  const authToken = await auth(code, companyParam)
  if (authToken) {
    cookieStore.set("authToken", authToken, {
      httpOnly: true,
    })
  }
  return redirect(redirectTo)
}

export { GET }