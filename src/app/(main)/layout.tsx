"use server"

import { UserProvider } from "@/widgets/user/provider"
import { PlaylistProvider } from "@/widgets/music/playlist/provider"
import { Sidebar } from "@/widgets/sidebar"
import { Suspense } from "react"

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Suspense>
        <UserProvider />
      </Suspense>
      <Suspense>
        <PlaylistProvider />
      </Suspense>
      <Suspense>
        <Sidebar>{children}</Sidebar>
      </Suspense>
    </>
  )
}

export default MainLayout
