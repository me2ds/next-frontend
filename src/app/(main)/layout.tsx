"use server"

import { UserProvider } from "@/widgets/user/provider"
import { PlaylistProvider } from "@/widgets/music/playlist/provider"
import { Sidebar } from "@/widgets/sidebar"

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <UserProvider>
      <PlaylistProvider>
        <Sidebar>
          {children}
        </Sidebar>
      </PlaylistProvider>
    </UserProvider>
  )
}

export default MainLayout
