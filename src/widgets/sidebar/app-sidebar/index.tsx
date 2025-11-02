"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarRail,
} from "@/shared/ui/sidebar"
import dynamic from "next/dynamic"
import { Suspense } from "react"
import { AuthStore } from "@/entities/auth/model"
import { UserStore } from "@/entities/user/model"
import { Spinner } from "@/shared/ui/spinner"
import { AuthDialog } from "@/features/auth/ui/dialog"

const UserInfo = dynamic(() =>
  import("../user/ui/info").then(({ UserInfo }) => UserInfo)
)
import { AuthGuard } from "@/features/auth/ui/guard"
import { MusicPanel } from "../music/ui"
import { ChatPanel } from "../chat/ui"
import {
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/shared/ui/sidebar"
import { HelpCircle, Info, Shield, FileText, ExternalLink, Home } from "lucide-react"
import Link from "next/link"
import { routes } from "@/shared/config/routes"

const AppSidebar = () => {
  const { showAuth } = AuthStore()
  const { user } = UserStore()

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <AuthGuard>
            <MusicPanel />
            <ChatPanel />
          </AuthGuard>
          <AuthGuard showIfUser={false}>
            <SidebarGroupLabel>Полезные ссылки</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="На главную">
                    <Link href={routes.root}>
                      <Home className="w-4 h-4" />
                      <span>На главную</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="О нас">
                    <Link href={routes.about}>
                      <Info className="w-4 h-4" />
                      <span>О нас</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="FAQ">
                    <Link href={routes.faq}>
                      <HelpCircle className="w-4 h-4" />
                      <span>FAQ</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    tooltip="Политика конфиденциальности"
                  >
                    <Link href={routes.privacy}>
                      <Shield className="w-4 h-4" />
                      <span>Политика конфиденциальности</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    tooltip="Пользовательское соглашение"
                  >
                    <Link href={routes.terms}>
                      <FileText className="w-4 h-4" />
                      <span>Пользовательское соглашение</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="GitHub">
                    <Link
                      href={routes.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>GitHub</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </AuthGuard>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className={"flex justify-center items-center"}>
        {!showAuth && (
          <Suspense
            fallback={
              <div className={"mb-1 flex flex-col items-center justify-center"}>
                <Spinner />
              </div>
            }
          >
            {user && <UserInfo />}
            {!user && <div className={"size-8"}></div>}
          </Suspense>
        )}
        {showAuth && <AuthDialog />}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

export { AppSidebar }
