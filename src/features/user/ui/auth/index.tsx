"use client";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/shared/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@/shared/ui/dropdown-menu";
import {
  ChevronsUpDown,
  LogIn
} from "lucide-react";
import Image from "next/image";

const AuthPanel = () => {
  const { isMobile } = useSidebar();
  const authVariants = [
    {
      name: "Google",
      icon: "google-icon.svg"
    },
    {
      name: "Github",
      icon: "github-icon.svg"
    },
    {
      name: "Telegram",
      icon: "telegram-icon.svg"
    }
  ]
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <LogIn className={"ml-2"}/>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuGroup>
              {authVariants.map((variant) => 
                <DropdownMenuItem key={variant.name}>
                  <Image
                    src={variant.icon} 
                    alt=""
                    width={"16"} 
                    height={"16"}
                  />
                  {variant.name}
                </DropdownMenuItem>
              )}
            </DropdownMenuGroup>

          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export { AuthPanel };
