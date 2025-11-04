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

const TopLinks = () => {
  return (
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
      </SidebarMenu>
    </SidebarGroupContent>
  )
}

const BottomLinks = () => {
  return (
    <SidebarGroupContent>
      <SidebarGroupLabel>Policy</SidebarGroupLabel>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton asChild tooltip="Политика конфиденциальности">
            <Link href={routes.privacy}>
              <Shield className="w-4 h-4" />
              <span>Политика конфиденциальности</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton asChild tooltip="Пользовательское соглашение">
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
  )
}

export { TopLinks, BottomLinks }