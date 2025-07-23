"use server"

import { SidebarProvider, SidebarTrigger } from "@/shared/ui/sidebar";
import { AppSidebar } from "@/widgets/sidebar";
import { UserProvider } from "@/widgets/user/provider";
import { cookies } from "next/headers";
import { PlaylistProvider } from "@/widgets/music/playlist/provider";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"
	return (
		<UserProvider>
      <PlaylistProvider>
        <SidebarProvider defaultOpen={defaultOpen}>
          <AppSidebar />
          <main className={"w-full"}>
            <SidebarTrigger />
            { children }
          </main>
        </SidebarProvider>
      </PlaylistProvider>
		</UserProvider>
	)
}

export default MainLayout;