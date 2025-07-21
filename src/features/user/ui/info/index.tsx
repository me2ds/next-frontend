"use client"
import { type User, UserStore } from "@/entities/user/model"
import { routes } from "@/shared/config/routes"
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuSeparator,
} from "@/shared/ui/dropdown-menu"
import { LogOut, BadgeCheck, ChevronsUpDown } from "lucide-react"
import { logout } from "@/features/user/model/logout"
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/shared/ui/sidebar"
import Link from "next/link"

const UserInfo = () => {
  const user = UserStore().user as User
  const { isMobile } = useSidebar()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground cursor-pointer"
            >
              <UserAvatar user={user} />
              <Username user={user} />
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={8}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <UserAvatar user={user} />
                <Username user={user} />
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <Link href={routes.accountRoute}>
                <DropdownMenuItem>
                  <BadgeCheck />
                  Account
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
            <DropdownMenuItem onClick={logout}>
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

const Username = ({ user }: { user: User }) => {
  return (
    <div className="grid flex-1 text-left text-sm leading-tight ml-1">
      <span className="truncate font-semibold">{user.username}</span>
    </div>
  )
}

const UserAvatar = ({ user }: { user: User }) => {
  const getFallback = () => {
    const [firstName, lastName] = user.username.split(" ")
    if (!lastName) return firstName[0]
    const fallback = `${firstName[0]}${lastName[0]}`
    return fallback
  }
  return (
    <Avatar>
      <AvatarFallback>{getFallback()}</AvatarFallback>
      <AvatarImage src={user.avatar} />
    </Avatar>
  )
}

export { UserInfo }
