"use server"

import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/shared/ui/sidebar"
import { AppSidebar } from "@/widgets/sidebar"
import { UserProvider } from "@/widgets/user/provider"
import { cookies } from "next/headers"
import { PlaylistProvider } from "@/widgets/music/playlist/provider"
import { Separator } from "@/shared/ui/separator"

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"
  return (
    <UserProvider>
      <PlaylistProvider>
        <SidebarProvider defaultOpen={defaultOpen}>
          <AppSidebar />
          <SidebarInset>
            <header
              className={
                "flex items-center border-b p-2 sticky top-0 bg-background z-50"
              }
            >
              <SidebarTrigger />
              <div className={"h-6"}>
                <Separator orientation={"vertical"} className={"ml-2"} />
              </div>
            </header>
            <main className={"p-3 h-full"}>{children}</main>
          </SidebarInset>
        </SidebarProvider>
      </PlaylistProvider>
    </UserProvider>
  )
}

export default MainLayout
