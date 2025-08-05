import { Badge } from "@/shared/ui/badge"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui/tooltip"
import { UserStore } from "../../model"
import { useState } from "react"
import { Check } from "lucide-react"

const UsernameBadge = () => {
  const [copied, setCopied] = useState<boolean>(false)
  const { user } = UserStore()
  const [open, setOpen] = useState(false)


  const handleCopy = async () => {
    await navigator.clipboard.writeText(user?.id ?? "")
    setOpen(true)
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  return (
    <Tooltip onOpenChange={setOpen} open={open}>
      <TooltipTrigger className={"flex size-fit cursor-pointer"} onClick={handleCopy}>
        <Badge variant={"secondary"} className={"size-full bg-blue-800 text-white font-bold"}>
          {user?.username}
        </Badge>
      </TooltipTrigger>
      <TooltipContent>
        {copied && (
          <div className={"flex items-center gap-1"}>
            <Check className={"size-4"}/>
            <span>Copied</span>
          </div>)}
        {!copied && <span>Copy to clipboard</span>}
      </TooltipContent>
    </Tooltip>
  )
}

export { UsernameBadge }
