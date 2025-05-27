"use server"

import { SidebarProvider, SidebarTrigger } from "@/shared/ui/sidebar";
import { AppSidebar } from "@/widgets/sidebar";
import { UserProvider } from "@/features/user/provider";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
	return (
		<UserProvider>
			<SidebarProvider>
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