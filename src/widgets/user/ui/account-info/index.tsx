"use client"

import { UserStore } from "@/entities/user/model"
import { UserAvatar } from "@/entities/user/ui/avatar"
import { AuthGuard } from "@/features/auth/ui/guard"
import { updateUser } from "@/features/user/api/update-user"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/shared/ui/context-menu"
import { createFileReader } from "@/shared/utils/createFileReader"
import { Pencil, Trash2 } from "lucide-react"
import { toast } from "sonner"
import { UserBanner } from "@/entities/user/ui/banner"
import { uploadFile } from "@/shared/utils/uploadFile"

const AccountInfo = () => {
  const { user, setUser } = UserStore()

  const deleteAvatar = async () => {
    const newUser = { ...user!, avatar: null }
    const updatedUser = await updateUser(newUser)
    setUser(updatedUser)
  }

  const updateAvatar = async () => {
    const file = await uploadFile({
      accept: "image/*",
      maxSize: 5 * 1024 * 1024,
    }).catch((e: any) => {
      toast.error(e.message)
    })
    if (!file) return
    const { reader, promise } = createFileReader()
    reader.readAsDataURL(file)
    const newUser = { ...user!, avatar: (await promise) as string }
    try {
      const updatedUser = await updateUser(newUser)
      setUser(updatedUser)
    } catch (e: any) {
      toast.error(e.message)
    }
  }

  const deleteBanner = async () => {
    const newUser = { ...user!, banner: null }
    const updatedUser = await updateUser(newUser)
    setUser(updatedUser)
  }

  const updateBanner = async () => {
    const file = await uploadFile({
      accept: "image/*",
      maxSize: 5 * 1024 * 1024,
    }).catch((e: any) => {
      toast.error(e.message)
    })
    if (!file) return
    const { reader, promise } = createFileReader()
    reader.readAsDataURL(file)
    const newUser = { ...user!, banner: (await promise) as string }
    try {
      const updatedUser = await updateUser(newUser)
      setUser(updatedUser)
    } catch (e: any) {
      toast.error(e.message)
    }
  }

  return (
    <AuthGuard>
      <div className={"flex flex-col"}>
        <ContextMenu>
          <ContextMenuTrigger className={"w-full h-44 sm:h-56 md:h-64 lg:h-72 xl:h-80"}>
            <UserBanner src={user?.banner} />
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem onClick={updateBanner}>
              <Pencil />
              <span>Update banner</span>
            </ContextMenuItem>
            <ContextMenuItem onClick={deleteBanner}>
              <Trash2 />
              <span>Delete banner</span>
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
        <div className={"flex p-3"}>
          <ContextMenu>
            <ContextMenuTrigger className={"size-36 rounded-full -mt-24 border-8 border-background z-10"}>
              <UserAvatar user={user!} className={"size-full rounded-full"} />
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem onClick={updateAvatar}>
                <Pencil />
                <span>Update avatar</span>
              </ContextMenuItem>
              <ContextMenuItem onClick={deleteAvatar}>
                <Trash2 />
                <span>Delete avatar</span>
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </div>
      </div>
    </AuthGuard>
  )
}

export { AccountInfo }
