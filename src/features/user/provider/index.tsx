"use client"

import { UserStore } from "@/entities/user/model"
import { useEffect } from "react"
import cookie from "js-cookie"

type Props = {
	children: React.ReactNode,
}

const UserProvider = ({ children }: Props) => {
	
	const token = cookie.get("token") || null
	const { getUser } = UserStore()
	
	useEffect(() => {
		getUser(token)
	}, [getUser, token])
	
	return <>{ children }</>
}

export { UserProvider }