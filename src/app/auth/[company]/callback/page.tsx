"use client"
import { useParams, useRouter, useSearchParams } from "next/navigation"
import { type Company } from "@/shared/model"
import { useEffect } from "react"
import { BACKEND_API } from "@/shared/api/http-client"
import cookie from "js-cookie"
import { Loader } from "@/shared/ui/loader"

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
		  if (!response.ok) {
				router.push("/")
		    return
		  }
			const { token }: { token: string } = await response.json()
			cookie.set("token", token)
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
