"use server"

import { SidebarProvider, SidebarTrigger } from "@/shared/ui/sidebar";
import { AppSidebar } from "@/widgets/sidebar";
import { UserProvider } from "@/widgets/user/provider";
import { cookies } from "next/headers";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"
	return (
		<UserProvider>
			<SidebarProvider defaultOpen={defaultOpen}>
	      <AppSidebar />
	      <main>
	        <SidebarTrigger />
				  { children }
	      </main>
			</SidebarProvider>
		</UserProvider>
	)
}

export default MainLayout;