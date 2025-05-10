"use server"

import { SidebarProvider, SidebarTrigger } from "@/shared/ui/sidebar";
import { AppSidebar } from "@/widgets/sidebar";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
	return (
		<SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
			  {children}
      </main>
		</SidebarProvider>
	)
}

export default MainLayout;