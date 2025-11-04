import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/shared/ui/sidebar"
import { Separator } from "@/shared/ui/separator"
import { AppSidebar } from "./app-sidebar"
import { cookies } from "next/headers"

const Sidebar = async ({ children }: { children: React.ReactNode }) => {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"
  return (
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
  )
}

export { Sidebar }
