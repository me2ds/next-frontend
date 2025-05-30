"use client"
import { UserStore, type User } from "@/entities/user/model"
import { Company } from "@/shared/model"
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from "@/shared/ui/dropdown-menu"
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@/shared/ui/sidebar"
import cookie from "js-cookie"
import { BadgeCheck, Bell, ChevronsUpDown, CreditCard, LogOut, Sparkles } from "lucide-react"

const SidebarPanel = () => {

	const userStore = UserStore()
	const user = userStore.user as User
	const company = cookie.get("auth_company") as Company
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
							<UserInfo user={user} company={company} />
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
								<UserInfo user={user} company={company} />
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Sparkles />
                Upgrade to Pro
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <BadgeCheck />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={userStore.logout}>
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}


const UserInfo = ({ user, company }: { user: User, company: Company }) => {
	return (
	<>
		<Avatar>
	   	<AvatarImage src={user.avatar_url} />
	   	<AvatarFallback>DS</AvatarFallback>
	  </Avatar>
	  <div className="grid flex-1 text-left text-sm leading-tight">
			<span className="truncate font-semibold">
				{ company === 'github' && user.login }
				{ company === 'google' && user.name }
			</span>						
	    <span className="truncate text-xs">
				{ company === 'github' && (user.email || user.name) }
				{ company === 'google' && user.email }
			</span>
	  </div>
	</>
  )
}

export { SidebarPanel }
