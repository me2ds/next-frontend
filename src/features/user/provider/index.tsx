"use client"

import { UserStore } from "@/entities/user/model"
import { useEffect } from "react"
import cookie from "js-cookie"
import { Company } from "@/shared/model"

type Props = {
	children: React.ReactNode,
}

const UserProvider = ({ children }: Props) => {
	
	const token = cookie.get("auth_token") || null
	const company = cookie.get("auth_company") || null
	
	const { getUser } = UserStore()
	
	useEffect(() => {
		getUser(token, company as Company | null)
	}, [getUser, token, company])
	
	return <>{ children }</>
}

export { UserProvider }