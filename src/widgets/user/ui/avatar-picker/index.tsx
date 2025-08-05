import { useState, useRef } from "react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogFooter,
  DialogClose,
  DialogTrigger,
} from "@/shared/ui/dialog"
import { Button } from "@/shared/ui/button"
import { uploadFile } from "@/shared/utils/uploadFile"
import { Show } from "@/shared/ui/show"
import { createFileReader } from "@/shared/utils/createFileReader"
import { ImageCropper } from "@/shared/ui/image-cropper"
import { UserStore } from "@/entities/user/model"
import { updateUser } from "@/features/user/api/update-user"
import { toast } from "sonner"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/shared/ui/context-menu"
import { UserAvatar } from "@/entities/user/ui/avatar"
import { Pencil, Trash2 } from "lucide-react"
import { fileToURL } from "@/shared/utils/fileToURL"

const AvatarPicker = () => {
  const [imageData, setImageData] = useState<Blob | null>(null)
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const { user, setUser, takeSnapshot, snapshot } = UserStore()
  const imageCropperRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState<boolean>(false)

  const deleteAvatar = async () => {
    takeSnapshot()
    const newUser = { ...user!, avatar: null }
    setUser(newUser)
    toast.promise(updateUser(newUser), {
      loading: "Deleting avatar...",
      success: "Avatar deleted",
      error: (e) => {
        setUser(snapshot)
        return e.message
      },
    })
  }

  const updateAvatar = async () => {
    setImageData(null)
    setImageUrl(null)
    const file = await uploadFile({})
    const url = fileToURL(file)
    setImageUrl(url)
    setImageData(file)
  }

  const cropperCallback = async (image: Blob) => {
    takeSnapshot()
    const { reader, promise } = createFileReader()
    reader.readAsDataURL(image)
    const result = await promise as string
    const newUser = { ...user!, avatar: result }
    setUser(newUser)
    toast.promise(updateUser(newUser), {
      loading: "Updating avatar...",
      success: (updatedUser) => {
        setUser(updatedUser)
        return "Avatar updated"
      },
      error: (e) => {
        setUser(snapshot)
        return e.message
      },
    })
  }

  const handleSave = () => {
    imageCropperRef.current?.click()
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <ContextMenu>
        <ContextMenuTrigger
          className={
            "size-36 rounded-full -mt-24 border-8 border-background z-10"
          }
        >
          <UserAvatar user={user!} className={"size-full rounded-full"} />
        </ContextMenuTrigger>
        <ContextMenuContent>
          <DialogTrigger>
            <ContextMenuItem onClick={updateAvatar}>
              <Pencil />
              <span>Update avatar</span>
            </ContextMenuItem>
          </DialogTrigger>
          <ContextMenuItem onClick={deleteAvatar}>
            <Trash2 />
            <span>Delete avatar</span>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      <Show when={imageUrl && imageData}>
        <DialogContent>
          <DialogTitle></DialogTitle>
          <div className="flex flex-col items-center justify-center">
            <div className={"flex w-full h-60"}>
              <ImageCropper
                ref={imageCropperRef}
                imageData={imageData!}
                imageUrl={imageUrl!}
                callback={cropperCallback}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild={true}>
              <Button variant={"default"}>Cancel</Button>
            </DialogClose>
            <Button variant={"outline"} onClick={handleSave}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Show>
    </Dialog>
  )
}

export { AvatarPicker }
