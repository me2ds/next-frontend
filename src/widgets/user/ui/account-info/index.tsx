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

const AccountInfo = () => {
  const { user, setUser } = UserStore()

  const deleteAvatar = async () => {
    const newUser = { ...user!, avatar: null }
    const updatedUser = await updateUser(newUser)
    setUser(updatedUser)
  }

  const updateAvatar = async () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'

    input.onchange = async (e) => {
      const { reader, promise } = createFileReader() 
      const file = (e.target as HTMLInputElement).files?.[0]
      if (!file) return
      reader.readAsDataURL(file)
      const base64 = await promise as string
      const newUser = { ...user!, avatar: base64 }
      try {
        const updatedUser = await updateUser(newUser)
        setUser(updatedUser)
      } catch (e: any) {
        toast.error(e.message)
      }
    }
    input.click()
  }

  return (
    <AuthGuard>
      <div className={"flex"}>
        <ContextMenu>
          <ContextMenuTrigger className={"size-32 rounded-full"}>
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
    </AuthGuard>
  )
}

export { AccountInfo }
