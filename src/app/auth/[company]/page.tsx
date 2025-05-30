"use client"
import { BACKEND_API } from "@/shared/api/http-client"
import { type Company } from "@/shared/model"
import { Loader } from "@/shared/ui/loader"
import cookie from "js-cookie"
import { useParams, useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"

const AuthCallback = () => {
  const searchParams = useSearchParams()
  const { company } = useParams() as { company: Company }
  const code = searchParams.get("code")
  const router = useRouter()
	useEffect(() => {
		(async () => {
		  const response = await fetch(`${BACKEND_API}/auth/${company}`, {
		    method: "post",
		    body: JSON.stringify({ code }),
		    headers: { "Content-Type": "Application/json" },
		    keepalive: true
		  })
		  if (response.ok) {
				const { token }: { token: string } = await response.json()
				cookie.set("auth_token", token)
		  }
			router.push("/")
		})()
	}, [router, code, company])
	return (
		<main className={"flex w-dvw h-dvh justify-center items-center"}>
			<div className={"flex flex-col gap-4"}>
				<Loader className={"self-center"} />
				<span>Загружаем твой профиль...</span>
			</div>
		</main>
	)
}

export default AuthCallback
