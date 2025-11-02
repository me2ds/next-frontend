import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/shared/ui/sidebar"
import { Separator } from "@/shared/ui/separator"
import { Suspense } from "react"
import { cookies } from "next/headers"
import dynamic from "next/dynamic"

const AppSidebar = dynamic(() =>
  import("@/widgets/sidebar/app-sidebar").then(({ AppSidebar }) => AppSidebar),
  { ssr: true },
)

const Sidebar = async ({ children }: { children: React.ReactNode }) => {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <Suspense fallback={null}>
        <AppSidebar />
      </Suspense>
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
