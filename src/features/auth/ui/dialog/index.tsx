"use client"

import { authVariants } from "@/entities/company/model"
import { Button } from "@/shared/ui/button"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
  DialogDescription,
} from "@/shared/ui/dialog"
import { useRouter, usePathname } from "next/navigation"
import cookie from "js-cookie"
import { SidebarMenuButton } from "@/shared/ui/sidebar"
import { LogIn, ChevronsUpDown } from "lucide-react"

const AuthDialog = () => {
  const pathname = usePathname()
  const router = useRouter()

  const handleRedirect = (route: string) => {
    cookie.set("redirectTo", pathname)
    router.replace(route)
  }

  return (
    <Dialog>
      <DialogTrigger asChild={true}>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <LogIn className={"ml-2"} />
          <ChevronsUpDown className="ml-auto size-4" />
        </SidebarMenuButton>
      </DialogTrigger>
      <DialogContent className={"w-auto max-w-lg md:max-w-96"}>
        <DialogHeader className={"items-center p-4"}>
          <DialogTitle>Log in or create an account</DialogTitle>
          <DialogDescription>
            We’ll create your account if it doesn’t exist.
          </DialogDescription>
        </DialogHeader>
        <div className={"flex flex-col gap-4 p-6 pt-4"}>
          {authVariants.map((variant, index) => (
            <Button
              key={index}
              variant={"outline"}
              className={"w-full px-8"}
              onClick={() => handleRedirect(variant.url)}
            >
              <Image src={variant.icon} alt="" width={16} height={16} />
              Continue with {variant.name}
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export { AuthDialog }
