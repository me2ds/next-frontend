import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/shared/ui/dialog"
import { SidebarMenuSubButton } from "@/shared/ui/sidebar"
import { Plus } from "lucide-react"
import { Label } from "@/shared/ui/label"
import { Input } from "@/shared/ui/input"
import { Button } from "@/shared/ui/button"
import { useForm, SubmitHandler } from "react-hook-form"
import { playlistStore } from "@/entities/music/model"

type FormInput = {
  name: string
}

const CreateNewPlaylist = () => {
  const { addPlaylist } = playlistStore()
  const { register, handleSubmit } = useForm<FormInput>()
  const onSubmit: SubmitHandler<FormInput> = (data) => {
    addPlaylist(data.name)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <SidebarMenuSubButton>
          <Plus />
          <span>Create new playlist</span>
        </SidebarMenuSubButton>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-8">
        <DialogHeader>
          <DialogTitle>Create new playlist</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <form
          className="flex flex-col gap-4"
          id="playlist-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Label htmlFor="playlist-name">Playlist name</Label>
          <Input
            id="playlist-name"
            {...register("name", { required: true })}
            placeholder="Enter playlist name"
          />
        </form>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit" form="playlist-form">
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export { CreateNewPlaylist }
