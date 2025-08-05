import Image from "next/image"
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
} from "@/shared/ui/context-menu"
import { Pencil, Trash2 } from "lucide-react"
import { UserStore } from "@/entities/user/model"
import { updateUser } from "@/features/user/api/update-user"
import { toast } from "sonner"
import { Show } from "@/shared/ui/show"
import { uploadFile } from "@/shared/utils/uploadFile"
import { fileToURL } from "@/shared/utils/fileToURL"
import { createFileReader } from "@/shared/utils/createFileReader"

const UserBanner = () => {
  const { user, setUser, takeSnapshot, snapshot } = UserStore()

  const deleteBanner = async () => {
    takeSnapshot()
    const newUser = { ...user!, banner: null }
    setUser(newUser)
    toast.promise(updateUser(newUser), {
      loading: "Deleting banner...",
      success: (updatedUser) => {
        setUser(updatedUser)
        return "Banner deleted"
      },
      error: (e) => {
        setUser(snapshot)
        return e.message
      },
    })
  }

  const updateBanner = async () => {
    // TODO: переделать запрос на formData и хранить в s3
    const file = await uploadFile({
      maxSize: 5 * 1024 * 1024,
    }).catch((e: any) => {
      toast.error(e.message)
    })
    if (!file) return
    takeSnapshot()
    setUser({ ...user!, banner: fileToURL(file) })
    const { reader, promise } = createFileReader()
    reader.readAsDataURL(file)
    const newUser = { ...user!, banner: (await promise) as string }
    toast.promise(updateUser(newUser), {
      loading: "Updating banner...",
      success: (updatedUser) => {
        setUser(updatedUser)
        return "Banner updated"
      },
      error: (e) => {
        setUser(snapshot)
        return e.message
      },
    })
  }
  return (
    <ContextMenu>
      <ContextMenuTrigger
        className={"w-full h-44 sm:h-56 md:h-64 lg:h-72 xl:h-80"}
      >
        <div className={"size-full rounded-xl overflow-hidden relative"}>
          <Show
            when={user?.banner}
            fallback={<BannerFallback />}
          >
            <Image
              src={user?.banner!}
              alt={"user banner"}
              fill={true}
              className={"object-cover"}
            />
          </Show>
        </div>
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
  )
}

const BannerFallback = () => {
  return <div className={"bg-accent size-full"} />
}

export { UserBanner, BannerFallback }
